<template>
  <div class="absolute right-0 top-0 m-20">
    <button onclick="showToast()">pencet buru</button>
    <!--Toast Notif Success-->
    <div class="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2 toast hidden">
      <!--icon-->
      <div class="text-green-500 mr-3 bg-white p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      </div>
      <!--text-->
      <h2 class="text-white max-w-xs">Ini pesan ketika sukses</h2>
    </div>
    <!--Toast Notif Info-->
    <div class="flex items-center bg-blue-500 border-l-4 border-blue-700 py-2 px-3 shadow-md mb-2 hidden">
      <!--icon-->
      <div class="text-blue-500 mr-3 bg-white p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16">
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
      <!--text-->
      <h2 class="text-white max-w-xs">Ini pesan ketika ada info</h2>
    </div>
    <!--Toast Notif Warning-->
    <div class="flex items-center bg-orange-500 border-l-4 border-orange-700 py-2 px-3 shadow-md mb-2 hidden">
      <!--icon-->
      <div class="text-orange-500 mr-3 bg-white p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation" viewBox="0 0 16 16">
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </div>
      <!--text-->
      <h2 class="text-white max-w-xs">Ini pesan ketika ada warning</h2>
    </div>
    <!--Toast Notif Danger-->
    <div class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2 hidden">
      <!--icon-->
      <div class="text-red-500 mr-3 bg-white p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <!--text-->
      <h2 class="text-white max-w-xs">Ini pesan ketika ada danger</h2>
    </div>
  </div>
  </div>
</template>
<script>
</script>
