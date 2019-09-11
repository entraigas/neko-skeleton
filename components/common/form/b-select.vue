<template>
  <ValidationProvider
    v-slot="props"
    :name="veeLabel || label"
    :rules="veeRules"
    slim
  >
    <b-field
      :label="label"
      :name="name"
      :size="size"
      :help="help"
      :state="mVeeCalculateState(props)"
      :error-msg="props.errors[0]"
    >
      <select
        v-model="inputValue"
        :name="name"
        :style="inputStyle"
        :class="'form-control' + mVeeSizeClass + mVeeErrorClass"
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
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeValidateMixin from './mixim'
import BField from './b-field'

export default {
  name: 'BInput',
  components: { ValidationProvider, BField },
  mixins: [VeeValidateMixin],
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
  data() {
    return {
      state: null
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
    }
  }
}
</script>
