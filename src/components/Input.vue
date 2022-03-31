<template>
	<input type="text" v-model="value" :placeholder="placeholder">
</template>

<script>
export default {
	name : "Input",
	props : {
		placeholder : String
	},
	data() {
		return {
			value: ""
		}
	}
}
</script>

<style scoped>

</style>