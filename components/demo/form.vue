<template>
  <div class="container">
    <h1>Form Example</h1>

    <div class="card">
      <div class="card-header">
        Form Title
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
// import BInput from '~/components/common/form/b-input'
// import BSelect from '~/components/common/form/b-select'
// import BTextarea from '~/components/common/form/b-textarea'
// import BAutocomplete from '~/components/common/form/b-autocomplete'

export default {
  name: 'Demo',
  // components: { BInput, BSelect, BTextarea, BAutocomplete },
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
