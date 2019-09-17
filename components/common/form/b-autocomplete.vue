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
      <vue-bootstrap-typeahead
        v-model="ac"
        :data="options"
        :serializer="serializer"
        :placeholder="placeholder"
        :disabled="!!disabled"
        @hit="onSelect"
      />
      <!-- <input
        v-model="inputValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="!!disabled"
        :style="inputStyle"
        :class="'form-control' + mVeeSizeClass + mVeeErrorClass"
        :state="state"
        @input="props.validate"
      /> -->
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeValidateMixin from './mixim'
import BField from './b-field'
import VueBootstrapTypeahead from './autocomplete/VueBootstrapTypeahead'

export default {
  name: 'BAutocomplete',
  components: { ValidationProvider, BField, VueBootstrapTypeahead },
  mixins: [VeeValidateMixin],
  props: {
    value: {
      type: [Object, String, Number],
      default: ''
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
    name: {
      type: String,
      required: false
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
      ac: ''
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
  methods: {
    onSelect(value) {
      this.inputValue = value
    }
  }
}
</script>
