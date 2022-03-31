<template>
	<div>
		<div class="title">
			<h1> {{  content }} </h1>
		</div>
		<h3 v-if="subtitle" class="subtitle"> {{ subtitle }} </h3>
	</div>

</template>

<script>
export default {
	name : "Title",
	props: {
		content: String,
		subtitle: String
	}
}
</script>