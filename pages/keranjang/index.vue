<template>
  <div class="mx-auto px-44 py-20 ">
    <!-- component -->
    <!-- Table -->
    <div class="shadow-lg border-gray-200 rounded-sm bg-white mx-auto max-w-full w-full border">
      <header class="border-b border-gray-100 px-5 py-4 ">
        <h2 class="font-bold text-5xl text-gray-800 ">Daftar Belanjaanmu</h2>
      </header>
      <div class="p-3 ">
        <div class="overflow-x-auto ">
          <table class="table-auto w-full ">
            <thead class="font-semibold text-gray-400 text-xs uppercase bg-gray-50 ">
              <tr>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-left ">No</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-left ">Foto</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-left ">Makanan</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-left ">Keterangan</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-center ">Jumlah</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-center ">Harga</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  <div class="font-semibold text-center ">Total Harga</div>
                </th>
                <th class="whitespace-nowrap p-2 ">
                  Hapus
                </th>
              </tr>
            </thead>
            <tbody v-for="(keranjang, index) in keranjangJ" :key="keranjang.id" class="text-sm divide-gray-100 divide-y ">
              <tr>
                <td class="whitespace-nowrap p-2 ">
                  <div class="items-center flex">
                    <div class="flex-shrink-0 h-10 w-auto mr-2 sm:mr-3">{{ index + 1 }}</div>
                  </div>
                </td>
                <td class="whitespace-nowrap p-2 ">
                  <img class="rounded-md bg-center bg-cover h-[80px] w-auto " :src="require(`~/assets/images/` + keranjang.products.gambar)" />
                </td>
                <td class="whitespace-nowrap p-2 ">
                  <div class="text-green-500 text-left text-lg ">{{ keranjang.products.nama }}</div>
                </td>
                <td class="whitespace-nowrap p-2 ">
                  <div class="text-left text-lg ">{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</div>
                </td>
                <td class="whitespace-nowrap p-2 ">
                  <div class="text-center text-lg ">{{ keranjang.jumlah_pemesanan }}</div>
                </td>
                <td class="whitespace-nowrap p-2 ">
                  <div class="text-center text-lg ">IDR. {{ keranjang.products.harga }}</div>
                </td>
                <td class="whitespace-nowrap p-2 ">
                  <div class="text-center text-lg ">IDR. {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}</div>
                </td>
                <td class="text-red-500 text-center whitespace-nowrap p-2 ">
                  <button @click="hapusKeranjang(keranjang.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Total Harga Beda Border -->
    <div class="shadow-lg border-gray-200 rounded-sm bg-white mt-3 mx-auto max-w-full w-full border">
      <div class="whitespace-nowrap p-2 gap-4 grid-cols-8 grid">
        <div class="space-x-10 col-end-8 flex">
          <div class="">Total Harga:</div>
          <div class="">IDR.{{totalHarga}}</div>
        </div>
      </div>
    </div>
    <!-- Form Meja Pemesan -->
    <div class="space-y-3 place-content-end ">
      <div class="pt-8 space-y-2 ">
        <label class="text-xl ">Nama</label>
        <form v-on:submit.prevent class="shadow-lg rounded-md items-center justify-between border flex relative">
          <input type="text" v-model="pesan.nama" name="search" class="tracking-[1px] ring-green-400 rounded-md p-2 h-10 w-full outline-none focus:ring-2" />
        </form>
      </div>
      <div class="space-y-2 ">
        <label class="text-xl ">Nomor Meja</label>
        <form v-on:submit.prevent class="shadow-lg rounded-md items-center justify-between border">
          <input type="number" v-model="pesan.noMeja" name="search" class="tracking-[1px] ring-green-400 rounded-md p-2 h-10 w-full outline-none focus:ring-2" />
        </form>
        <div class="pt-2 ">
          <button id="submitPesanan" @click="checkout, showModal = true" type="button" class="font-medium leading-tight text-xs tracking-[1px] uppercase duration-150 ease-in-out shadow-md bg-green-400 px-6 py-2.5 active:bg-green-600 active:shadow-lg focus:bg-gree-600 focus:outline-none focus:ring-0 focus:shadow-lg hover:bg-green-600 hover:shadow-lg inline-block rounded transition">
            <p class="text-white ">→ Pesan</p>
          </button>
        </div>
      </div>
    </div>
    <!--Toast Notif-->
    <div class="p-20 ">
      <notifications class="mt-20 mr-10" />
    </div>
    <SuccessModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>
<script>
import SuccessModal from '~/components/SuccessModal.vue'
import axios from 'axios'

export default {
  components: { SuccessModal },
  data() {
    return {
      pesan: {},
      showModal: false,
    }
  },
  async asyncData({ $axios, $config }) {
    const keranjangJ = await $axios.$get(`http://localhost:3000/keranjangs/`)
    return { keranjangJ }
  },
  methods: {
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$notify({
            title: '<h1 class="text-xl ">Pesanan<h1>',
            text: '<h2 class="text-[15px] ">Sedang menghapus pesanan...</h2>',
            type: 'info',
          })
          window.location.reload(true)
        })
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja && this.keranjangJ.length) {
        this.pesan.keranjang = this.keranjangJ
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            // update keranjang menjadi 0 ketika pesanan sukses dipesan
            this.keranjangJ.map((item) => {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
            })
            this.$notify({
              title: '<h1 class="text-xl ">Pesanan<h1>',
              text: '<h2 class="text-[15px] ">Sukses dipesan</h2><br><h2 class="text-[15px] ">Mohon tunggu ...</h2>',
              type: 'success',
            }, document.getElementById('submitPesanan').setAttribute('disabled', 'disabled'))
            window.location.href = "/pesanan-sukses"
          })
          .catch((err) => console.log(err));
      } else {
        this.$notify({
          title: '<h1 class="text-xl ">Peringatan<h1>',
          text: '<h2 class="text-[15px] ">Nama, nomor meja, beserta belanjaan harus diisi</h2>',
          type: 'error',
        })
      }
    }
  },
  computed: {
    totalHarga() {
      return this.keranjangJ.reduce(function(items, data) {
        return items + data.products.harga * data.jumlah_pemesanan
      }, 0)
    }
  }
}

</script>
