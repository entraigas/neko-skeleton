<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand to="/">Neko project</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'demo-inputs' }">Inputs</b-nav-item>
      <b-nav-item :to="{ name: 'demo-validation' }">Validation</b-nav-item>

      <!-- Navbar dropdowns -->
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
