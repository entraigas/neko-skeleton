<template>
  <b-field
    :label="label"
    :name="name"
    :size="size"
    :help="help"
    :vee-scope="veeScope"
  >
    <input
      v-model="inputValue"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="!!disabled"
      :style="inputStyle"
      :class="'form-control' + sizeClass"
    />
  </b-field>
</template>

<script>
// import VeeValidateMixin from './mixin'
import BField from './b-field'

export default {
  name: 'BInput',
  // inject: ['$validator'],
  components: { BField },
  // mixins: [VeeValidateMixin],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    // input attributes
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    },
    help: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inputStyle: {
      type: String,
      default: ''
    },
    // validator attributes
    veeRules: {
      type: [String, Object],
      required: false,
      default: null
    },
    veeScope: {
      type: String,
      required: false,
      default: null
    },
    veeValidateOn: {
      type: String,
      default: ''
    },
    veeLabel: {
      type: String,
      default: null
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    sizeClass() {
      if (this.size === 'sm') {
        return ' form-control-sm'
      }
      if (this.size === 'lg') {
        return ' form-control-lg'
      }
      return ''
    }
  }
}
</script>
