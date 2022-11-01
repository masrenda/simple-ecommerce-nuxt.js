<template>
  <div class="justify-center flex">
    <div class="shadow-lg rounded-lg bg-white max-w-sm ">
      <img class="rounded-t-lg bg-center bg-cover h-[200px] w-full " :src="require(`~/assets/images/` + product.gambar)" alt="" />
      <div class="p-6 ">
        <h5 class="mb-2 font-semibold text-gray-900 text-xl ">
          {{ product.nama }}
        </h5>
        <p class="mb-4 text-base text-gray-700 ">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div class="justify-between flex">
          <h5 class="font-semibold text-2xl ">IDR {{ product.harga }}</h5>
          <nuxt-link type="button" class="px-6 py-2.5 shadow-md duration-150 ease-in-out font-medium leading-tight text-white text-xs tracking-[1px] uppercase bg-green-400 active:bg-green-600 active:shadow-lg focus:bg-gree-600 focus:outline-none focus:ring-0 focus:shadow-lg hover:bg-green-600 hover:shadow-lg inline-block rounded transition" :to="`/foods/${product.id}`">
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