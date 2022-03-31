<template>
	<div class="endresults">
		<Header />
		<Title content="Eindresultaat" />
		<div class="endresults-content flex space-between">
			<div class="endresults-item flex flex-col items-center justify-center">
				<h2 class="text-white font-thin font-xl">#1</h2>
				<p class="card relative">Pietje</p>
			</div>
			<div class="endresults-item flex flex-col items-center justify-center">
				<h2 class="text-white font-thin font-xl">#2</h2>
				<p class="card relative">Pietje</p>
			</div>
			<div class="endresults-item flex flex-col items-center justify-center">
				<h2 class="text-white font-thin font-xl">#3</h2>
				<p class="card relative">Pietje</p>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header"
import Title from "@/components/Title"
export default {
	name : "Subresults",
	components : {Title, Header},
	mounted() {
		document.querySelector('.confetti').classList.remove('hidden')
	}
}
</script>

<style scoped>

</style>