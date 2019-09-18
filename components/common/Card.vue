<template>
  <div class="card">
    <div class="card-header">
      <div v-if="hasButtons" class="btn-group float-right ml-2" role="group">
        <button type="button" class="btn btn-secondary" @click="onReset">
          {{ resetBtn }}
        </button>
        <button type="button" class="btn btn-primary" @click="onSave">
          {{ okBtn }}
        </button>
      </div>
      <h3 v-if="collapsible" :class="cardTitleCss">
        <icon name="sort-down" scale="2" />
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
    resetBtn: {
      type: String,
      default: null
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
  transform: rotate(180deg);
  transition: transform 150ms linear;
}
</style>
