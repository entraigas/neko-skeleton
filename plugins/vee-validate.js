// import { configure } from 'vee-validate'

// const config = {
//   classes: {
//     valid: 'is-valid',
//     invalid: 'is-invalid'
//   },
//   bails: true,
//   skipOptional: true,
//   mode: 'aggressive',
//   useConstraintAttrs: true
// }

// // Sets the options.
// export default configure(config)

import { extend } from 'vee-validate'
import { required, alpha } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters'
})
