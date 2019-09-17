<template>
  <div class="container">
    <h1>Input</h1>

    <h2>type</h2>
    <code>
      &lt;b-input v-model="text" /&gt;
    </code>
    <b-input v-model="text" name="text" />

    <code>
      &lt;b-input v-model="email" type="email" /&gt;
    </code>
    <b-input v-model="email" name="email" type="email" />

    <code>
      &lt;b-input v-model="password" type="password" /&gt;
    </code>
    <b-input v-model="password" name="password" type="password" />

    <code>
      &lt;b-input v-model="number" type="number" /&gt;
    </code>
    <b-input v-model="number" type="number" name="age" />

    <code>
      &lt;b-input v-model="number" type="range" /&gt;
    </code>
    <b-input v-model="number" name="password" type="range" />

    <h2>label, disabled, placeholder, help &amp; size</h2>
    <code>
      &lt;b-input v-model="text" /&gt;
    </code>
    <b-input v-model="text" name="text" />

    <code>
      &lt;b-input v-model="text" label="Name" /&gt;
    </code>
    <b-input v-model="text" name="text" label="Name" />

    <code>
      &lt;b-input v-model="text" label="Name" disabled /&gt;
    </code>
    <b-input v-model="text" name="text" label="Name" disabled />

    <code>
      &lt;b-input v-model="text" label="Name" placeholder="some text..." /&gt;
    </code>
    <b-input
      v-model="text"
      name="text"
      label="Name"
      placeholder="some text..."
    />

    <code>
      &lt;b-input v-model="text" label="Name" placeholder="some text..."
      help="At least 6 characters"/&gt;
    </code>
    <b-input
      v-model="text"
      name="text"
      label="Name"
      placeholder="some text..."
      help="At least 6 characters"
    />

    <h3>size</h3>
    <p>
      You can use <mark>sm</mark>, <mark>md</mark> &amp; <mark>lg</mark> sizes.
      By default use md
    </p>
    <code>
      &lt;b-input v-model="text" label="Name" size="[sm|md|lg]" /&gt;
    </code>
    <b-input
      v-model="text"
      name="text"
      label="Name"
      size="sm"
      placeholder="sm"
    />
    <b-input
      v-model="text"
      name="text"
      label="Name"
      placeholder="by default use md"
    />
    <b-input
      v-model="text"
      name="text"
      label="Name"
      size="lg"
      placeholder="lg"
    />

    <h1>Textarea</h1>
    <code>
      &lt;b-textarea v-model="text" label="TextArea" placeholder="entet text
      here..." /&gt;
    </code>
    <b-textarea
      v-model="text"
      name="textarea"
      label="TextArea"
      placeholder="entet text here..."
    />

    <h1>Checkbox &amp; Switch</h1>
    <code>
      &lt;b-checkbox v-model="check" label="Checkbox" placeholder="Enable
      feature" /&gt;
    </code>
    <b-checkbox
      v-model="check"
      name="switch"
      label="Checkbox"
      placeholder="Enable feature"
    />

    <code>
      &lt;b-checkbox v-model="check" label="Switchbox" placeholder="Enable
      feature" is-switch /&gt;
    </code>
    <b-checkbox
      v-model="check"
      name="check"
      label="Switchbox"
      placeholder="Enable feature"
      is-switch
    />

    <h1>Select</h1>
    <code>
      &lt;b-select v-model="selected" :options="[{value, text}, {value, text}]
      first="Select an option..." /&gt;
    </code>
    <b-select
      v-model="selected"
      :options="options"
      label="Select"
      first="Select an option..."
      name="select"
    />

    <h1>Autocomplete</h1>
    <code>
      &lt;b-autocomplete v-model="selected" :options="[{value, text}, {value,
      text}] :serializer="(s) => s.text" label="Typeahead" placeholder="Select
      an option..." help="At least 2 characters" /&gt;
    </code>
    <b-autocomplete
      v-model="ac"
      :options="options"
      :serializer="(s) => s.text"
      label="Typeahead"
      placeholder="Select an option..."
      help="At least 2 characters"
      @hit="onSelect"
    />
  </div>
</template>

<script>
import BInput from '~/components/common/form/b-input'
import BSelect from '~/components/common/form/b-select'
import BTextarea from '~/components/common/form/b-textarea'
import BCheckbox from '~/components/common/form/b-checkbox'
import BAutocomplete from '~/components/common/form/b-autocomplete'

export default {
  name: 'Demo',
  components: { BInput, BSelect, BTextarea, BCheckbox, BAutocomplete },
  data() {
    return {
      text: '',
      password: '',
      email: '',
      number: 0,
      ac: null,
      selected: null,
      options: [
        { value: 1, text: 'option 1' },
        { value: 2, text: 'option 2' },
        { value: 3, text: 'option 3' },
        { value: 4, text: 'option 4' }
      ],
      check: true
    }
  },
  methods: {
    onSelect(value) {
      alert(JSON.stringify(value))
    }
  }
}
</script>

<style>
.container {
  margin-bottom: 10vh;
}
</style>
