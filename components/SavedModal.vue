<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <img class="check" src="" alt="" />
      <h6>Saved!</h6>
      <p>Your Details have been saved Successfully</p>
      <button>Go Home</button>
    </div>
    <div class="close" @click="$emit('close-modal')">
      <img class="close-img" src="" alt="" />
    </div>
  </div>
</template>
