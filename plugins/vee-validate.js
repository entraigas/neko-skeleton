/* eslint import/namespace: [2, { allowComputed: true }] */
// import all rules
import { configure, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

for (const rule in rules) {
  extend(rule, rules[rule])
}

const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true
}
configure(config)
