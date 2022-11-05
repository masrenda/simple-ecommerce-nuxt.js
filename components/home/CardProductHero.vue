<template>
  <div class="flex justify-center">
    <div class="max-w-sm bg-white rounded-lg shadow-lg">
      <img class="rounded-t-lg w-full h-[200px] bg-center bg-cover" :src="require(`~/assets/images/` + product.gambar)" alt="" />
      <div class="p-6">
        <h5 class="mb-2 text-xl font-semibold text-gray-900">
          {{ product.nama }}
        </h5>
        <p class="mb-4 text-base text-gray-700">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div class="flex justify-between">
          <h5 class="text-2xl font-semibold">IDR {{ product.harga }}</h5>
          <nuxt-link type="button" class="inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-gree-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 tracking-[1px] ease-in-out" :to="`/foods/` + product.id">
            → Pesan
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};

</script>
