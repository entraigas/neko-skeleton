<template>
  <b-field
    :label="label"
    :name="name"
    :size="size"
    :help="help"
    :vee-scope="veeScope"
  >
    <div class="custom-control custom-switch">
      <input
        v-model="checked"
        type="checkbox"
        :name="name"
        :class="'custom-control-input' + sizeClass"
        :style="inputStyle"
        :disabled="!!disabled"
      />
      <label class="custom-control-label" @click="checked = !checked">{{
        placeholder
      }}</label>
    </div>
  </b-field>
</template>

<script>
// import VeeValidateMixin from './mixin'
import BField from './b-field'

export default {
  name: 'BSwitch',
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
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true
    },
    uncheckedValue: {
      type: [Boolean, String, Number],
      default: false
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
  data() {
    return {
      checked: this.value === this.checkedValue
    }
  },
  computed: {
    // inputValue: {
    //   get() {
    //     return this.value
    //   },
    //   set(checked) {
    //     const value = checked ? this.checkedValue : this.uncheckedValue
    //     this.$emit('input', value)
    //   }
    // },
    sizeClass() {
      if (this.size === 'sm') {
        return ' form-control-sm'
      }
      if (this.size === 'lg') {
        return ' form-control-lg'
      }
      return ''
    }
  },
  watch: {
    checked(checked) {
      const value = checked ? this.checkedValue : this.uncheckedValue
      this.$emit('input', value)
    }
  }
}
</script>
