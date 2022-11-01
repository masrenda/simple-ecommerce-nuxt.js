<template>
  <div>
    <h1 class="px-2 py-1 text-white bg-green-400 rounded-md">{{ jumlah_pemesanan.length }}</h1>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      jumlah_pemesanan: []
    }
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pemesanan = data
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs/")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error))
  },
  beforeUpdate() {
    axios
      .get("http://localhost:3000/keranjangs/")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error))
  },
  update() {
    axios
      .get("http://localhost:3000/keranjangs/")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error))
  }
}

</script>
