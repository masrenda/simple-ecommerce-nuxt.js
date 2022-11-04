<template>
  <!--Delicious Food Menu-->
  <div class="mx-auto px-44 py-32 ">
    <div class="items-center justify-between flex">
      <div class="space-y-3 ">
        <div>
          <h1 class="font-bold text-5xl ">Delicious Food Menu,</h1>
          <h1 class="text-3xl ">in your gadget</h1>
        </div>
        <p class="text-xl tracking-[1px] ">Buruan pesen makanan favorit loe!!</p>
        <div class="pt-8 flex">
          <nuxt-link type="button" class="px-6 py-2.5 shadow-md duration-150 ease-in-out font-medium leading-tight text-white text-xs tracking-[1px] uppercase bg-green-400 active:bg-green-600 active:shadow-lg focus:bg-gree-600 focus:outline-none focus:ring-0 focus:shadow-lg hover:bg-green-600 hover:shadow-lg inline-block rounded transition" :to="`/foods`">
            → Pesan
          </nuxt-link>
        </div>
      </div>
      <img class="w-1/2 rounded-md" src="~/assets/images/kedai.jpg" />
    </div>
    <!--Best Foods Section || "~/components/CardProductHero.vue"-->
    <div class="pt-20 space-y-6 ">
      <div>
        <h1 class="font-bold text-5xl ">Best Foods</h1>
        <h2 class="text-xl ">Makanan Kesukaan Orang-Orang Hemat</h2>
      </div>
      <div class="space-x-9 text-3xl justify-between flex">
        <div v-for="product in products" :key="product.id">
          <CardProductHero :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CardProductHero from "../components/home/CardProductHero.vue";

export default {
  components: { CardProductHero },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products/")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};

</script>
<style lang="scss" scoped></style>
