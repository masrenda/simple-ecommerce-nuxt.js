<template>
  <div class="py-24 mx-auto px-44">
    <div class="flex space-x-10">
      <img
        class="w-[1/2] h-[350px] bg-center bg-cover rounded"
        :src="getImages(product.gambar)"
      />
      <div class="w-full space-y-3 divide-y">
        <h1 class="text-5xl font-bold">{{ product.nama }}</h1>
        <div class="pt-2 space-y-2">
          <div class="flex space-x-2">
            <h4 class="text-2xl">Harga:</h4>
            <h4 class="text-2xl font-semibold">IDR. {{ product.harga }}</h4>
          </div>
          <div class="space-y-2">
            <label class="text-xl">Jumlah Pesan</label>
            <form
              v-on:submit.prevent
              class="relative flex items-center justify-between w-full border rounded-md shadow-lg"
            >
              <input
                v-model="pesan.jumlah_pemesanan"
                type="number"
                name="search"
                class="w-full h-10 p-2 ring-green-400 rounded-md tracking-[1px] outline-none focus:ring-2"
                placeholder="Cth: 1, 2, ..."
              />
            </form>
          </div>
          <div class="space-y-2">
            <label class="text-xl">Keterangan</label>
            <form
              class="relative flex items-center justify-between w-full border rounded-md shadow-lg"
            >
              <textarea
                v-model="pesan.keterangan"
                name="search"
                class="w-full h-auto p-2 ring-green-400 rounded-md tracking-[1px] outline-none focus:ring-2"
                placeholder="Cth: Banyakin bumbunya, banyakin semuanya, bisa tawar esteh jadi 2 gk bang?, dsb."
              ></textarea>
            </form>
            <div class="pt-2">
              <button
                @click="pemesanan"
                type="button"
                class="inline-block px-6 py-2.5 bg-green-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-gree-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 tracking-[1px] ease-in-out"
              >
                <p class="text-white">→ Pesan</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  validate(data) {
    if (data.params.id <= 9) {
      return /^\d+$/.test(data.params.id);
    } else {
      console.error();
    }
  },
  data() {
    return {
      pesan: {},
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    getImages(imagesName) {
      return imagesName
        ? require("~/assets/images/" + this.product.gambar)
        : "";
    },
    pemesanan() {
      this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          console.log("pesanan sukses cuy");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
