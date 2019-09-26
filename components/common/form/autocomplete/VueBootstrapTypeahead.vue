<template>
  <div>
    <div :class="sizeClasses">
      <div
        v-if="$slots.prepend || prepend"
        ref="prependDiv"
        class="input-group-prepend"
      >
        <slot name="prepend">
          <span class="input-group-text">{{ prepend }}</span>
        </slot>
      </div>
      <input
        ref="input"
        type="search"
        :class="`form-control ${inputClass}`"
        :placeholder="placeholder"
        :aria-label="placeholder"
        :value="inputValue"
        :disabled="disabled"
        autocomplete="off"
        @focus="isFocused = true"
        @blur="handleBlur"
        @input="handleInput($event.target.value)"
        @keyup.down="$emit('keyup.down', $event.target.value)"
        @keyup.up="$emit('keyup.up', $event.target.value)"
        @keyup.enter="$emit('keyup.enter', $event.target.value)"
        @keydown.esc="isFocused = false"
      />
      <div v-if="$slots.append || append" class="input-group-append">
        <slot name="append">
          <span class="input-group-text">{{ append }}</span>
        </slot>
      </div>
    </div>
    <vue-bootstrap-typeahead-list
      v-show="isFocused && data.length > 0"
      ref="list"
      class="vbt-autcomplete-list"
      :query="inputValue"
      :data="formattedData"
      :background-variant="backgroundVariant"
      :text-variant="textVariant"
      :max-matches="maxMatches"
      :min-matching-chars="minMatchingChars"
      @hit="handleHit"
    >
      <!-- pass down all scoped slots -->
      <template
        v-for="(slot, slotName) in $scopedSlots"
        :slot="slotName"
        slot-scope="{ htmlText }"
      >
        <slot :name="slotName" v-bind="{ data, htmlText }"></slot>
      </template>
      <!-- below is the right solution, however if the user does not provide a scoped slot, vue will still set $scopedSlots.suggestion to a blank scope
      <template v-if="$scopedSlots.suggestion" slot="suggestion" slot-scope="{ data, htmlText }">
        <slot name="suggestion" v-bind="{ data, htmlText }" />
      </template>-->
    </vue-bootstrap-typeahead-list>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'
import VueBootstrapTypeaheadList from './VueBootstrapTypeaheadList.vue'

export default {
  name: 'VueBootstrapTypehead',
  components: {
    VueBootstrapTypeaheadList
  },
  props: {
    value: {
      type: [Object, String, Number],
      default: ''
    },
    data: {
      type: Array,
      required: true,
      default: () => [],
      validator: (d) => Array.isArray(d)
    },
    serializer: {
      type: Function,
      default: (d) => d,
      validator: (d) => d instanceof Function
    },
    size: {
      type: String,
      default: null,
      validator: (size) => ['lg', 'md', 'sm'].includes(size)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    backgroundVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: ''
    },
    maxMatches: {
      type: Number,
      default: 10
    },
    minMatchingChars: {
      type: Number,
      default: 2
    },
    placeholder: {
      type: String,
      default: null
    },
    prepend: {
      type: String,
      default: null
    },
    append: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      isFocused: false,
      inputValue: this.value || ''
    }
  },

  computed: {
    sizeClasses() {
      return this.size ? `input-group input-group-${this.size}` : 'input-group'
    },

    formattedData() {
      if (!Array.isArray(this.data)) {
        return []
      }
      return this.data.map((d, i) => {
        return {
          id: i,
          data: d,
          text: this.serializer(d)
        }
      })
    }
  },

  mounted() {
    this.$_ro = new ResizeObserver((e) => {
      this.resizeList(this.$refs.input)
    })
    this.$_ro.observe(this.$refs.input)
    this.$_ro.observe(this.$refs.list.$el)
  },

  beforeDestroy() {
    this.$_ro.disconnect()
  },

  methods: {
    resizeList(el) {
      const rect = el.getBoundingClientRect()
      const listStyle = this.$refs.list.$el.style
      // Set the width of the list on resize
      listStyle.width = rect.width + 'px'
      // Set the margin when the prepend prop or slot is populated
      // (setting the "left" CSS property doesn't work)
      if (this.$refs.prependDiv) {
        const prependRect = this.$refs.prependDiv.getBoundingClientRect()
        listStyle.marginLeft = prependRect.width + 'px'
      }
    },

    handleHit(evt) {
      if (typeof this.value !== 'undefined') {
        this.$emit('input', evt.text)
      }

      this.inputValue = evt.text
      this.$emit('hit', evt.data)
      this.$refs.input.blur()
      this.isFocused = false
    },

    handleBlur(evt) {
      const tgt = evt.relatedTarget
      if (tgt && tgt.classList.contains('vbst-item')) {
        return
      }
      this.isFocused = false
      this.$emit('blur')
    },

    handleInput(newValue) {
      this.isFocused = true
      this.inputValue = newValue
      // If v-model is being used, emit an input event
      if (typeof this.value !== 'undefined') {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style scoped>
.vbt-autcomplete-list {
  padding-top: 5px;
  position: absolute;
  max-height: 350px;
  overflow-y: auto;
  z-index: 999;
}
</style>
