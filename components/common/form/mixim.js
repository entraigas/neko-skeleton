import { get, isString, keys } from 'lodash'

export default {
  computed: {
    veeIsScoped() {
      return (
        this.veeScope && isString(this.veeScope) && this.veeScope.length > 0
      )
    },
    veeScopeKey() {
      return this.veeIsScoped ? '$' + this.veeScope : null
    },
    veeFieldsObject() {
      if (!this.veeScope) {
        return this.veeFields
      }
      return get(this.veeFields, this.veeScopeKey, {})
    },
    veeFieldsArray() {
      return Object.keys(this.veeFieldsObject)
    },
    // some input had focus
    veeFormIsTouched() {
      return this.veeFieldsArray.some((key) =>
        get(this.veeFields, [this.veeScopeKey, key, 'touched'], false)
      )
    },
    // form has changed
    veeFormIsDirty() {
      // a change made by user interaction
      const dirty = this.veeFieldsArray.some((key) =>
        get(this.veeFields, [this.veeScopeKey, key, 'dirty'], false)
      )
      // a changed made by code
      const changed = this.veeFieldsArray.some((key) =>
        get(this.veeFields, [this.veeScopeKey, key, 'changed'], false)
      )
      return dirty || changed
    }
  },
  methods: {
    async veeFormIsValid() {
      if (this.veeIsScoped) {
        const promise = await this.$validator.validate(this.veeScope + '.*')
        return promise
      }
      const promise = await this.$validator.validate()
      return promise
    },
    async veeFormReset() {
      await this.$validator.reset(this.veeScope)
    },
    async veeFieldValidate(fieldName) {
      if (this.veeIsScoped) {
        const promise = await this.$validator.validate(
          `${this.veeScope}.${fieldName}`
        )
        return promise
      }
      const promise = await this.$validator.validate(fieldName)
      return promise
    },
    veeFieldGetState(field) {
      if (!this.veeFieldsObject[field]) {
        return null
      }
      const {
        untouched = false,
        changed = false,
        validated = false
      } = this.veeFieldsObject[field]
      if ((untouched || changed) && !validated) {
        return null
      }
      return this.veeFieldsObject[field].valid
    },
    veeFieldGetErrorMsg(field) {
      // if (this.veeCustomErrorMgs && this.veeCustomErrorMgs[field]) {
      //   return this.veeCustomErrorMgs[field]
      // }
      if (this.veeIsScoped) {
        return this.errors.first(this.veeScope + '.' + field)
      }
      return this.errors.first(field)
    },
    veeFieldSetErrors(errors) {
      keys(errors).forEach((field) => {
        const found = this.$validator.fields.find({ name: field })
        if (found) {
          this.$validator.errors.add({
            field: (this.veeScope ? this.veeScope + '.' : '') + field,
            msg: get(errors, [field, 0]) || `Field ${field} is invalid`
          })
          found.setFlags({ invalid: true })
        }
      })
    },
    veeFieldReset(fieldName) {
      this.$validator.fields.items.forEach((input) => {
        if (input.name === fieldName) {
          const field = this.$validator.fields.find({
            name: input.name
          })
          if (field) {
            this.$validator.errors.remove(input.name)
            field.reset()
          }
        }
      })
    }
  }
}
