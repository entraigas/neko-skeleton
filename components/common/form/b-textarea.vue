<template>
  <ValidationProvider
    v-slot="props"
    :name="veeLabel || label"
    :rules="veeRules"
    slim
  >
    <b-field
      :label="label"
      :size="size"
      :help="help"
      :state="mVeeCalculateState(props)"
      :error-msg="props.errors[0]"
    >
      <textarea
        v-model="inputValue"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="!!disabled"
        :class="'form-control' + mVeeSizeClass + mVeeErrorClass"
      />
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeValidateMixin from './mixim'
import BField from './b-field'

export default {
  name: 'BTextarea',
  components: { ValidationProvider, BField },
  mixins: [VeeValidateMixin],
  props: {
    // value & unique attributes
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    rows: {
      type: [Number, String],
      default: null
    },
    // common input attributes
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
  }
}
</script>
