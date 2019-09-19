import { get } from 'lodash'

export default {
  computed: {
    mVeeSizeClass() {
      const size = get(this, 'size', '')
      if (size === 'sm') {
        return ' form-control-sm'
      }
      if (size === 'lg') {
        return ' form-control-lg'
      }
      return ''
    },
    mVeeErrorClass() {
      const state = get(this, 'state', null)
      if (state === null) {
        return ''
      }
      // true is valid, false is invalid
      return state ? ' is-valid' : ' is-invalid'
    }
  },
  methods: {
    mVeeCalculateState(props) {
      // const calculateOriginal = (props) => {
      //   const { untouched = false, changed = false, validated = false } = props
      //   if ((untouched || changed) && !validated) {
      //     return null
      //   }
      //   return props.valid
      // }
      const calculate = (props) => {
        const { errors, valid, touched, changed } = props
        if (errors[0]) {
          return false
        }
        return (touched || changed) && valid ? true : null
      }
      this.state = calculate(props)
      return this.state
    }
  }
}
