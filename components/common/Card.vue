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
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
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
    }
  },
  computed: {
    hasButtons() {
      return !!this.okBtn || !!this.resetBtn
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
