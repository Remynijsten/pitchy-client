<template>
	<div class="endresults">
		<Header />
		<Title content="Eindresultaat" />
		<div class="endresults-content flex space-between">
			<div class="endresults-item flex flex-col items-center justify-center"
			     v-for="(winner, index) in winners"
			     :key="winner">
				<h2 class="text-white font-thin font-xl">#{{ index + 1 }}</h2>
				<p class="card relative">{{ winner.name }}</p>
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
	data() {
		return {
			winners : []
		}
	},
	mounted() {
		document.querySelector('.confetti').classList.remove('hidden')
		
		this.winners = JSON.parse(localStorage.getItem('winners')).slice(0,3)
		
		console.log(this.winners)
	}
}
</script>

<style scoped>

</style>