<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand to="/">Neko</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'demo-inputs' }">Input Controls</b-nav-item>
      <b-nav-item :to="{ name: 'demo-validation' }"
        >Input Validation</b-nav-item
      >
      <b-nav-item :to="{ name: 'demo-form' }">Form Example</b-nav-item>
      <!-- Navbar dropdowns -->
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
