<template>
  <div class="card">
    <div class="card-header">
      <div
        v-show="hasButtons && !collapsed"
        class="btn-group float-right ml-2"
        role="group"
      >
        <button
          v-show="!!resetBtn"
          :disabled="resetBtnDisabled"
          type="button"
          class="btn btn-secondary"
          @click="onReset"
        >
          {{ resetBtn }}
        </button>
        <button
          v-show="!!okBtn"
          :disabled="okBtnDisabled"
          type="button"
          class="btn btn-primary"
          @click="onSave"
        >
          {{ okBtn }}
        </button>
      </div>
      <h3 v-if="collapsible" class="card-title">
        <span :class="cardCollapseCss" @click="collapsed = !collapsed">
          <v-icon name="sort-down" />
        </span>
        <span class="pointer ml-2" @click="collapsed = !collapsed">{{
          title
        }}</span>
      </h3>
      <h3 v-else>{{ title }}</h3>
    </div>
    <div v-show="!collapsed" class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true
    },
    okBtn: {
      type: String,
      default: null
    },
    okBtnDisabled: {
      type: Boolean,
      default: false
    },
    resetBtn: {
      type: String,
      default: null
    },
    resetBtnDisabled: {
      type: Boolean,
      default: false
    },
    collapsible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    hasButtons() {
      return !!this.okBtn || !!this.resetBtn;
    },
    cardCollapseCss() {
      const css = ["pointer", "card-icon"];
      if (this.collapsed) {
        css.push("open");
      }
      return css.join(" ");
    }
  },
  methods: {
    onSave() {
      this.$emit("save");
    },
    onReset() {
      this.$emit("reset");
    }
  }
};
</script>

<style scoped>
.card-icon .fa-icon {
  vertical-align: top !important;
  transform: rotate(0deg);
  transition: transform 150ms linear;
}
.open .fa-icon {
  vertical-align: middle !important;
  transform: rotate(-180deg);
  transition: transform 150ms linear;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}
</style>
