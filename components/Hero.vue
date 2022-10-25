<template>
  <!--Delicious Food Menu-->
  <div class="py-32 mx-auto px-44">
    <div class="flex items-center justify-between">
      <div class="space-y-3">
        <div>
          <h1 class="text-5xl font-bold">Delicious Food Menu,</h1>
          <h1 class="text-3xl">in your gadget</h1>
        </div>
        <p class="tracking-[1px] text-xl">Buruan pesen makanan favorit loe!!</p>
        <div class="flex pt-8">
          <nuxt-link
            type="button"
            class="inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-gree-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 tracking-[1px] ease-in-out"
            :to="`/foods`"
          >
            → Pesan
          </nuxt-link>
        </div>
      </div>
      <img
        class="w-1/2"
        src="~/assets/images/undraw_breakfast_psiw.svg"
        alt="Mukbang Skuyy"
      />
    </div>

    <!--Best Foods Section || "~/components/CardProductHero.vue"-->
    <div class="pt-20 space-y-6">
      <div>
        <h1 class="text-5xl font-bold">Best Foods</h1>
        <h2 class="text-xl">Makanan Kesukaan Orang-Orang Hemat</h2>
      </div>
      <div class="flex justify-between text-3xl space-x-9">
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
