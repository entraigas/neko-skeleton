<template>
  <b-field
    :label="label"
    :name="name"
    :size="size"
    :help="help"
    :vee-scope="veeScope"
  >
    <select
      v-model="inputValue"
      :name="name"
      :style="inputStyle"
      :class="'form-control' + sizeClass"
      :disabled="disabled"
    >
      <option v-if="first" :value="null">{{ first }}</option>
      <option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :disabled="!!item.disabled"
        >{{ item.text }}</option
      >
    </select>
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
    label: {
      type: String,
      required: false,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    first: {
      type: [String, Number],
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
