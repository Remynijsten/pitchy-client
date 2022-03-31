<template>
	<div class="countdown">
		<Header />
		<lottie-player :src="countdown"
		               background="transparent"
		               speed="1"
		               style="width: 200px; height: 200px;"
		               loop autoplay>
		</lottie-player>
		<Title content="Klaar voor de start" />
		<div class="countdown-bar">
			<div class="countdown-bar-progress"></div>
		</div>
	</div>
	
</template>

<script>
import Header from "@/components/Header"
import Title from "@/components/Title"
import animationdata from "/src/assets/img/countdown.json"
import {SOCKET} from "@/utilities/helpers"

export default {
	name : "Countdown",
	components : {Title, Header},
	data() {
		return {
			countdown : animationdata
		}
	},
	mounted() {
		let progress = document.querySelector('.countdown-bar-progress')
		
		progress.addEventListener('animationend', () => {
			
			console.log('klaar met countdown')
			
			SOCKET.emit('load_next_state')
		})
	}
}
</script>