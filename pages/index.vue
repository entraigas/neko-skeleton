<template>
  <div>
    <!-- <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <button type="button" class="btn btn-primary">primary</button>
    <button type="button" class="btn btn-secondary">secondary</button>
    <button type="button" class="btn btn-success">success</button>
    <button type="button" class="btn btn-warning">warning</button>
    <button type="button" class="btn btn-danger">danger</button> -->
    <div>
      <demo-form />
    </div>
  </div>
</template>

<script>
import DemoForm from '~/components/demo/form'
export default {
  components: { DemoForm },
  data() {
    return {}
  }
}
</script>
