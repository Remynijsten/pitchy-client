<template>
	<div class="qr">
		<qrcode-vue :value="value" :size="size" level="H" />
	</div>
</template>

<script>

import QrcodeVue from 'qrcode.vue'

export default {
	name : "QR",
	data() {
		return {
			value: 'https://pitchy-server.herokuapp.com/',
			size: 300,
		}
	},
	components: {
		QrcodeVue,
	},
}
</script>