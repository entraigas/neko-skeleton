<template>
  <div>
    <!-- This layout will contain a menu, header, user profile, etc -->
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/common/navbar";
export default {
  components: { Navbar }
};
</script>
