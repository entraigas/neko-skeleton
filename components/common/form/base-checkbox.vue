<template>
  <ValidationProvider
    v-slot="props"
    :name="veeLabel || label"
    :rules="veeRules"
  >
    <base-field :label="label" :size="size" :help="help">
      <div v-if="isSwitch" class="custom-control custom-switch">
        <input
          v-model="checked"
          type="checkbox"
          :class="'custom-control-input' + mVeeSizeClass + mVeeErrorClass"
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
          :class="'custom-control-input' + mVeeSizeClass + mVeeErrorClass"
          :disabled="!!disabled"
        />
        <label class="custom-control-label" @click="onClick">{{
          placeholder
        }}</label>
      </div>
    </base-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeValidateMixin from './mixim'

export default {
  name: 'BaseCheckbox',
  components: { ValidationProvider },
  mixins: [VeeValidateMixin],
  props: {
    // value & unique attributes
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true
    },
    uncheckedValue: {
      type: [Boolean, String, Number],
      default: false
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
