<template>
  <div class="container">
    <h1>Input</h1>
    <b-input
      v-model="text"
      name="text"
      label="Name"
      placeholder="some text..."
      help="At least 6 characters"
      vee-rules="required|alpha"
    />

    <b-select
      v-model="selected"
      :options="options"
      name="select"
      label="Select"
      first="Select an option..."
      vee-rules="required"
    />

    <b-textarea
      v-model="textarea"
      label="TextArea"
      name="textarea"
      placeholder="entet text here..."
      vee-rules="required"
    />
  </div>
</template>

<script>
import BInput from '~/components/common/form/b-input'
import BSelect from '~/components/common/form/b-select'
import BTextarea from '~/components/common/form/b-textarea'

export default {
  name: 'Demo',
  components: { BInput, BSelect, BTextarea },
  data() {
    return {
      text: '',
      textarea: '',
      selected: null,
      options: [
        { value: 1, text: 'option 1' },
        { value: 2, text: 'option 2' },
        { value: 3, text: 'option 3' },
        { value: 4, text: 'option 4' }
      ]
    }
  }
}
</script>
