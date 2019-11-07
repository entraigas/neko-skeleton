<template>
  <div ref="suggestionList" class="list-group shadow">
    <vue-bootstrap-typeahead-list-item
      v-for="(item, id) in matchedItems"
      :key="id"
      :data="item.data"
      :html-text="highlight(item.text)"
      :background-variant="backgroundVariant"
      :text-variant="textVariant"
      :active="isListItemActive(id)"
      @click.native="handleHit(item, $event)"
    >
      <template
        v-if="$scopedSlots.suggestion"
        slot="suggestion"
        slot-scope="{ htmlText }"
      >
        <slot name="suggestion" v-bind="{ data, htmlText }" />
      </template>
    </vue-bootstrap-typeahead-list-item>
  </div>
</template>

<script>
import { size } from "lodash";
import VueBootstrapTypeaheadListItem from "./VueBootstrapTypeaheadListItem.vue";

function sanitize(text) {
  return text
    .toString()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegExp(str) {
  return str.toString().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default {
  name: "VueBootstrapTypeaheadList",
  components: {
    VueBootstrapTypeaheadListItem
  },
  props: {
    data: {
      type: Array,
      required: true,
      validator: d => Array.isArray(d)
    },
    query: {
      type: String,
      default: ""
    },
    backgroundVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    },
    maxMatches: {
      type: Number,
      default: 10
    },
    minMatchingChars: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      activeListItem: -1
    };
  },
  computed: {
    highlight() {
      return text => {
        text = sanitize(text);
        if (this.query && size(this.query) === 0) {
          return text;
        }
        const re = new RegExp(this.escapedQuery, "gi");

        return text.toString().replace(re, `<strong>$&</strong>`);
      };
    },
    escapedQuery() {
      return escapeRegExp(sanitize(this.query));
    },
    matchedItems() {
      // If no query, but minMatchingChars is 0: return trimmed data. filter and sort are not applicable as there is no query string.
      // simple falsey check should cover 0 length string, null, undefined.
      if (this.minMatchingChars === 0 && !this.query) {
        return this.data.slice(0, this.maxMatches);
      }
      if (size(this.query) === 0 || size(this.query) < this.minMatchingChars) {
        return [];
      }

      const re = new RegExp(this.escapedQuery, "gi");

      // Filter, sort, and concat
      return this.data
        .filter(i => (i.text.match ? i.text.match(re) !== null : false))
        .sort((a, b) => {
          const aIndex = a.text.indexOf(a.text.match(re)[0]);
          const bIndex = b.text.indexOf(b.text.match(re)[0]);

          if (aIndex < bIndex) {
            return -1;
          }
          if (aIndex > bIndex) {
            return 1;
          }
          return 0;
        })
        .slice(0, this.maxMatches);
    }
  },
  watch: {
    activeListItem(newValue, oldValue) {
      if (newValue >= 0) {
        const scrollContainer = this.$refs.suggestionList;
        const listItem = scrollContainer.children[this.activeListItem];
        const scrollContainerlHeight = scrollContainer.clientHeight;
        const listItemHeight = listItem.clientHeight;
        const visibleItems = Math.floor(
          scrollContainerlHeight / listItemHeight
        );
        if (newValue >= visibleItems) {
          scrollContainer.scrollTop = listItemHeight * this.activeListItem;
        } else {
          scrollContainer.scrollTop = 0;
        }
      }
    }
  },
  created() {
    this.$parent.$on("input", this.resetActiveListItem);
    this.$parent.$on("keyup.down", this.selectNextListItem);
    this.$parent.$on("keyup.up", this.selectPreviousListItem);
    this.$parent.$on("keyup.enter", this.hitActiveListItem);
  },
  methods: {
    handleHit(item, evt) {
      this.$emit("hit", item);
      evt.preventDefault();
    },
    isListItemActive(id) {
      return this.activeListItem === id;
    },
    resetActiveListItem() {
      this.activeListItem = -1;
    },
    selectNextListItem() {
      if (this.activeListItem < size(this.matchedItems) - 1) {
        this.activeListItem++;
      } else {
        this.resetActiveListItem();
      }
    },
    selectPreviousListItem() {
      if (this.activeListItem < 0) {
        this.activeListItem = size(this.matchedItems) - 1;
      } else {
        this.activeListItem--;
      }
    },
    hitActiveListItem() {
      if (this.activeListItem >= 0) {
        this.$emit("hit", this.matchedItems[this.activeListItem]);
      }
    }
  }
};
</script>
