<template>
  <card title="Form example" ok-btn="Save" reset-btn="Reset">
    <b-row>
      <b-col>
        <base-input
          v-model="email"
          label="Name"
          placeholder="john foo"
          vee-rules="required|min:5"
        />
        <base-input
          v-model="email"
          type="email"
          name="email"
          label="Email"
          placeholder="john@foo.com"
          vee-rules="required|email"
        />
      </b-col>
      <b-col>
        <base-input
          v-model="number"
          type="number"
          label="Age"
          vee-rules="required|digits:1"
        />
      </b-col>
    </b-row>
  </card>
</template>

<script>
import Card from '~/components/common/card'

export default {
  name: 'Demo',
  components: { Card },
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
