<template>
  <card title="Form example"> </card>
</template>

<script>
import Card from '~/components/common/Card'

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
