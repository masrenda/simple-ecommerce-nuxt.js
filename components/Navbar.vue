<template>
  <nav
    class="fixed z-10 flex items-center justify-between w-full h-16 text-gray-700 bg-white border-b border-gray-200 px-44"
  >
    <div class="flex items-center">
      <h1 class="mr-4 text-xl font-bold text-green-400">ANGKRINGAN WARAKAS</h1>
      <div class="items-center space-x-2 text-xl">
        <nuxt-link class="text-slate-400 hover:text-slate-600" to="/"
          >Home</nuxt-link
        >
        <nuxt-link class="text-slate-400 hover:text-slate-600" to="/foods"
          >Foods</nuxt-link
        >
      </div>
    </div>
    <nuxt-link
      class="flex items-center space-x-1 text-slate-400 hover:text-slate-600"
      to="/tos"
    >
      <h1 class="text-xl">Keranjang</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>

      <h1 class="px-2 py-1 text-white bg-green-400 rounded-md">0</h1>
    </nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
