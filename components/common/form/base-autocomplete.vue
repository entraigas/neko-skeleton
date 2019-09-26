<template>
  <div>
    <ValidationProvider
      ref="autocompete"
      v-slot="props"
      :name="veeLabel || label"
      :rules="veeRules"
    >
      <b-field
        :label="label"
        :size="size"
        :help="help"
        :state="calculateState(props)"
        :error-msg="props.errors"
      >
        <vue-bootstrap-typeahead
          v-model="inputValue"
          :data="options"
          :serializer="serializer"
          :placeholder="placeholder"
          :disabled="!!disabled"
          :input-class="mVeeSizeClass + mVeeErrorClass"
          :size="size"
          @blur="onBlur"
          @input="onChange"
          @hit="onHitAutocomplete"
        />
      </b-field>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeValidateMixin from './mixim'
import BField from './base-field'
import VueBootstrapTypeahead from './autocomplete/VueBootstrapTypeahead'

export default {
  name: 'BaseAutocomplete',
  components: { ValidationProvider, BField, VueBootstrapTypeahead },
  mixins: [VeeValidateMixin],
  props: {
    // value & unique attributes
    value: {
      type: [Object, String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    serializer: {
      type: Function,
      default: (d) => d,
      validator: (d) => d instanceof Function
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
      selected: null
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
    isSelected() {
      return !!this.selected
    }
  },
  methods: {
    calculateState(props) {
      const calculate = (props) => {
        const { untouched = false, changed = false, validated = false } = props
        if ((untouched || changed) && !validated) {
          return null
        }
        return props.valid
      }
      const state = calculate(props)
      if (state === null) {
        this.state = null
      } else {
        this.state = state && this.isSelected
      }
      return this.state
    },
    onBlur() {
      // console.log('pasoooo')
      this.$refs.autocompete.validate()
    },
    onChange() {
      this.selected = false
    },
    onHitAutocomplete(value) {
      this.$refs.autocompete.validate()
      this.selected = value
      this.$emit('hit', value)
    }
  }
}
</script>
