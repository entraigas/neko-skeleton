<template>
  <div class="form-group row">
    <label v-if="hasLabel" :class="'col-sm-2 col-form-label' + sizeClass">
      {{ label }}
    </label>
    <div :class="hasLabel ? 'col-sm-10' : 'col-sm-12'">
      <slot />
      <div v-if="state === false && hasErrorMsg" class="invalid-feedback">
        {{ parsedErrorMsg }}
      </div>
      <small v-if="hasHelp" class="form-text text-muted">
        {{ help }}
      </small>
    </div>
  </div>
</template>

<script>
import { trim, isArray } from 'lodash'
// import VeeValidateMixin from './mixin'

export default {
  name: 'BField',
  // inject: ['$validator'],
  // mixins: [VeeValidateMixin],
  props: {
    // input attributes
    label: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: String,
      default: 'md'
    },
    help: {
      type: String,
      default: null
    },
    // validator attributes
    state: {
      type: [Boolean, String],
      default: null
    },
    errorMsg: {
      type: [String, Array],
      default: ''
    }
  },
  computed: {
    hasLabel() {
      return !!trim(this.label).toString().length
    },
    hasHelp() {
      return !!trim(this.help).toString().length
    },
    hasErrorMsg() {
      return !!this.parsedErrorMsg.toString().length
    },
    parsedErrorMsg() {
      const errorMsg = this.errorMsg
      if (isArray(errorMsg)) {
        return errorMsg.length ? errorMsg.join(', ') : ''
      }
      return errorMsg
    },
    sizeClass() {
      if (this.size === 'sm') {
        return ' col-form-label-sm'
      }
      if (this.size === 'lg') {
        return ' col-form-label-lg'
      }
      return ''
    }
  }
}
</script>
