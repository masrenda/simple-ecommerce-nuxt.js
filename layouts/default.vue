<template>
  <div>
    <Navbar/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default { components: { Navbar } };
</script>

<style lang="scss" scoped></style>
