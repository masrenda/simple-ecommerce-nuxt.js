<template>
  <div class="p-20">
    <button @click="showToast">toastNotif</button>
    <notifications class="mt-20 mr-10" />
  </div>
</template>
<script type="text/javascript">
export default {
  methods: {
    showToast() {
      this.$notify({
        title: '<h1 class="text-xl">Pesanan<h1>',
        text: '<h2 class="text-[15px]">Pesanan anda sudah masuk keranjang</h2>',
        type: 'success',
        duration: 100,
        speed: 1000,
      })
    }
  }
}

</script>
