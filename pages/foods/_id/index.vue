<template>
  <div class="mx-auto px-44 py-24 ">
    <div class="space-x-10 flex">
      <img class="bg-center bg-cover h-[350px] w-[1/2] rounded" :src="getImages(product.gambar)" />
      <div class="space-y-3 divide-y w-full ">
        <h1 class="font-bold text-5xl ">{{ product.nama }}</h1>
        <div class="pt-2 space-y-2 ">
          <div class="space-x-2 flex">
            <h4 class="text-2xl ">Harga:</h4>
            <h4 class="font-semibold text-2xl ">IDR. {{ product.harga }}</h4>
          </div>
          <div class="space-y-2 ">
            <label class="text-xl ">Jumlah Pesan</label>
            <form v-on:submit.prevent class="shadow-lg rounded-md items-center justify-between w-full border flex relative">
              <input v-model="pesan.jumlah_pemesanan" type="number" name="search" class="p-2 ring-green-400 rounded-md tracking-[1px] h-10 w-full outline-none focus:ring-2" placeholder="Cth: 1, 2, ..." />
            </form>
          </div>
          <div class="space-y-2 ">
            <label class="text-xl ">Keterangan</label>
            <form class="shadow-lg rounded-md items-center justify-between w-full border flex relative">
              <textarea v-model="pesan.keterangan" name="search" class="p-2 ring-green-400 rounded-md tracking-[1px] h-auto w-full outline-none focus:ring-2" placeholder="Cth: Banyakin bumbunya, banyakin semuanya, bisa tawar esteh jadi 2 gk bang?, dsb."></textarea>
            </form>
            <div class="pt-2 ">
              <button id="submitPesanan" @click="pemesanan" type="button" class="px-6 py-2.5 shadow-md duration-150 ease-in-out font-medium leading-tight text-xs tracking-[1px] uppercase bg-green-400 active:bg-green-600 active:shadow-lg focus:bg-gree-600 focus:outline-none focus:ring-0 focus:shadow-lg hover:bg-green-600 hover:shadow-lg inline-block rounded transition">
                <p class="text-white ">→ Pesan</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Toast Notif-->
    <div class="p-20 ">
      <notifications class="mt-20 mr-10" />
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
      return imagesName ?
        require("~/assets/images/" + this.product.gambar) :
        "";
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan <= 99999999) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$notify({
              title: '<h1 class="text-xl ">Pesanan<h1>',
              text: '<h2 class="text-[15px] ">Pesanan sukses masuk keranjang</h2><br><h2 class="text-[15px]"> Mohon tunggu... </h2>',
              type: 'success',
            }, document.getElementById('submitPesanan').setAttribute('disabled', 'disabled'))
            window.location.href = "/keranjang"
          })
          .catch((err) => console.log(err));
      } else {
        this.$notify({
          title: '<h1 class="text-xl ">Peringatan<h1>',
          text: '<h2 class="text-[15px] ">Pesanan harus diisi terlebih dahulu</h2>',
          type: 'error',
        })
      }
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
