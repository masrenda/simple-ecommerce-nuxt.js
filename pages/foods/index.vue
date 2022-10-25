<template>
  <div>
    <!--Search Component-->
    <div class="py-20 mx-auto px-44">
      <h1 class="text-5xl font-bold">Daftar Makanan</h1>
      <div class="w-full mt-5 leading-6">
        <form
          class="relative flex items-center justify-between w-full border rounded-md shadow-lg"
        >
          <svg
            class="absolute block w-5 h-5 text-gray-400 left-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input
            type="name"
            name="search"
            class="w-full h-10 py-4 pl-12 ring-green-400 pr-40 rounded-md tracking-[1px] outline-none focus:ring-2"
            placeholder="Cari Makanan Kesukaan Loe Bang .."
            v-model="search"
          />
        </form>
      </div>

      <!--Best Foods Section || "~/components/CardProductHero.vue"-->
      <div class="space-y-6 pt-14">
        <div class="grid grid-cols-3 gap-8 text-3xl">
          <div v-for="product in filteredSearch" :key="product.id">
            <CardProductFoods :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardProductFoods from "~/components/foods/CardProductFoods";

export default {
  components: {
    CardProductFoods,
  },
  data() {
    return {
      search: "",
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
      .get("http://localhost:3000/products/")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    filteredSearch() {
      return this.products.filter((product) =>
        product.nama.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
