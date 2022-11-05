<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="items-center justify-center bg-black bg-opacity-50 h-screen w-full fixed flex left-0 top-0">
        <!-- modal -->
        <div class="shadow-lg bg-white w-1/3 rounded">
          <!-- modal header -->
          <div class="border-b px-4 py-2 ">
            <h3 class="text-center">Konfirmasi Pesanan</h3>
          </div>
          <!-- modal body -->
          <div class="p-3 text-center">
            Apakah anda akan mengkonfirmasi pesanan yang telah anda pesan?
          </div>
          <div class="border-t items-center justify-evenly p-3 w-100 close flex">
            <button @click="$emit('close-modal')" type="button" class="shadow-md bg-red-400 font-medium leading-tight text-xs tracking-[1px] uppercase duration-150 ease-in-out px-6 py-2.5  active:bg-red-600 active:shadow-lg focus:bg-red-600 focus:outline-none focus:ring-0 focus:shadow-lg hover:bg-red-600 hover:shadow-lg inline-block rounded transition">
              <p class="text-white ">Cancel</p>
            </button>
            <button @click="$emit('exec'), $emit('close-modal')" id="submitPesanan" type="button" class="shadow-md bg-green-400 font-medium leading-tight text-xs tracking-[1px] uppercase duration-150 ease-in-out px-6 py-2.5  active:bg-green-600 active:shadow-lg focus:bg-green-600 focus:outline-none focus:ring-0 focus:shadow-lg hover:bg-green-600 hover:shadow-lg inline-block rounded transition">
              <p class="text-white ">Oke</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
