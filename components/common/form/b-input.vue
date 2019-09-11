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
      <input
        v-model="inputValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="!!disabled"
        :style="inputStyle"
        :class="'form-control' + mVeeSizeClass + mVeeErrorClass"
        :state="state"
        @input="props.validate"
      />
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
  },
  methods: {}
}
</script>
