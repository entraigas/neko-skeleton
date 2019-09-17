<template>
  <div class="container">
    <h1>Validation...</h1>
    <p>
      More validation rulers in
      <a
        href="https://github.com/logaretm/vee-validate/blob/master/docs/api/rules.md"
        >https://github.com/logaretm/vee-validate</a
      >
    </p>

    <code>
      &lt;b-input v-model="email" vee-rules="required|email" /&gt;
    </code>
    <b-input
      v-model="email"
      type="email"
      name="email"
      label="Email"
      placeholder="john@foo.com"
      vee-rules="required|email"
    />

    <code>
      &lt;b-input v-model="number" vee-rules="required|digits:1" /&gt;
    </code>
    <b-input
      v-model="number"
      type="number"
      name="number"
      label="Number"
      vee-rules="required|digits:1"
    />

    <code>
      &lt;b-select v-model="textarea" vee-rules="required|alpha|min:5" /&gt;
    </code>
    <b-textarea
      v-model="textarea"
      label="TextArea"
      name="textarea"
      placeholder="entet text here..."
      help="Al least 5 characters"
      vee-rules="required|alpha|min:5"
    />

    <code>
      &lt;b-select v-model="selected"
      vee-rules="required|min_value:1|max_value:2" /&gt;
    </code>
    <b-select
      v-model="selected"
      :options="options"
      name="select"
      label="Select"
      first="Select an option..."
      vee-rules="required|min_value:1|max_value:2"
    />

    <b-autocomplete
      v-model="autocomplete"
      :options="options"
      :serializer="(s) => s.text"
      label="Typeahead"
      placeholder="Select an option..."
      vee-rules="required"
    />
  </div>
</template>

<script>
import BInput from '~/components/common/form/b-input'
import BSelect from '~/components/common/form/b-select'
import BTextarea from '~/components/common/form/b-textarea'
import BAutocomplete from '~/components/common/form/b-autocomplete'

export default {
  name: 'Demo',
  components: { BInput, BSelect, BTextarea, BAutocomplete },
  data() {
    return {
      email: '',
      number: 0,
      textarea: '',
      selected: null,
      autocomplete: null,
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
