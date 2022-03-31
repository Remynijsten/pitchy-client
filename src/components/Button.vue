<template>
	<button>{{  content }}</button>
</template>

<script>
export default {
	name : "Button",
	props : {
		content: String,
		disabled: Boolean
	}
}
</script>