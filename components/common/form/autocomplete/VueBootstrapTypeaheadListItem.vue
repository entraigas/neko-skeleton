<template>
  <a tabindex="0" href="#" :class="textClasses">
    <slot name="suggestion" v-bind="{ data: data, htmlText: htmlText }">
      <span v-html="htmlText"></span>
    </slot>
  </a>
</template>

<script>
export default {
  name: 'VueBootstrapTypeaheadListItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    data: {
      type: [String, Object],
      default: null
    },
    htmlText: {
      type: String,
      default: null
    },
    backgroundVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  },

  computed: {
    textClasses() {
      // let classes = ''
      // classes += this.active ? 'active' : ''
      // classes += this.backgroundVariant ? ` bg-${this.backgroundVariant}` : ''
      // classes += this.textVariant ? ` text-${this.textVariant}` : ''
      // return `vbst-item list-group-item list-group-item-action ${classes}`
      const classes = ['vbst-item', 'list-group-item', 'list-group-item-action']
      if (this.active) classes.push('active')
      if (this.backgroundVariant) classes.push(`bg-${this.backgroundVariant}`)
      if (this.textVariant) classes.push(`text-${this.textVariant}`)
      return classes.join(' ')
    }
  }
}
</script>
