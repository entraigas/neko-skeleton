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
      <h3 v-if="collapsible" :class="cardTitleCss">
        <span class="pointer" @click="collapsed = !collapsed">
          <icon name="sort-down" scale="2" />
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
  name: 'Card',
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
    }
  },
  computed: {
    hasButtons() {
      return !!this.okBtn || !!this.resetBtn
    },
    cardTitleCss() {
      const css = ['card-title']
      if (this.collapsed) {
        css.push('open')
      }
      return css.join(' ')
    }
  },
  methods: {
    onSave() {
      this.$emit('save')
    },
    onReset() {
      this.$emit('reset')
    }
  }
}
</script>

<style>
.card-title .fa-icon {
  transform: rotate(0deg);
  transition: transform 150ms linear;
}
.card-title.open .fa-icon {
  transform: rotate(-180deg);
  transition: transform 150ms linear;
}
</style>
