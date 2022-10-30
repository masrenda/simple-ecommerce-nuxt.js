<template>
	<div class="p-20">
		<button @click="showToast">toastNotif</button>
		<notifications classes="text-xl"/>

	</div>
</template>

<script type="text/javascript">
export default {
	methods: {
		showToast() {
			this.$notify({
    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: 'Pesanan',

    // Content (will be wrapped in div.notification-content)
    text: 'Pesanan anda sudah masuk <b>keranjang</b>',

    // (optional)
    // Class that will be assigned to the notification
    type: 'success',

    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 100,

    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000,

    // (optional)
    // Data object that can be used in your template
    data: {}
})
		}
	}
}
</script>