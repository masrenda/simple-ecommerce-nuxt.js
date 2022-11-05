<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/Navbar.vue";
import bgSlay from "~/assets/images/bgImage.svg"

export default {
  components: { Navbar }
};

</script>
