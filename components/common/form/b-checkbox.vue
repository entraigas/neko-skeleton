<template>
  <ValidationProvider
    v-slot="props"
    :name="veeLabel || label"
    :rules="veeRules"
    slim
  >
    <b-field :label="label" :name="name" :size="size" :help="help">
      <div v-if="isSwitch" class="custom-control custom-switch">
        <input
          v-model="checked"
          type="checkbox"
          :name="name"
          :class="'custom-control-input' + mVeeSizeClass + mVeeErrorClass"
          :style="inputStyle"
          :disabled="!!disabled"
        />
        <label class="custom-control-label" @click="onClick">{{
          placeholder
        }}</label>
      </div>
      <div v-else class="custom-control custom-checkbox">
        <input
          v-model="checked"
          type="checkbox"
          :name="name"
          :class="'custom-control-input' + mVeeSizeClass + mVeeErrorClass"
          :style="inputStyle"
          :disabled="!!disabled"
        />
        <label class="custom-control-label" @click="onClick">{{
          placeholder
        }}</label>
      </div>
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeValidateMixin from './mixim'
import BField from './b-field'

export default {
  name: 'BSwitch',
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
    isSwitch: {
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
      state: null,
      checked: null
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
  watch: {
    inputValue: {
      handler(value) {
        this.checked = value === this.checkedValue
      },
      immediate: true
    }
  },
  methods: {
    onClick() {
      const value = this.checked ? this.uncheckedValue : this.checkedValue
      this.$emit('input', value)
    }
  }
}
</script>
