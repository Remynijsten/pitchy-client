<template>
	<div class="question">
		<Header />
		
		<div class="countdown-bar">
			<div class="countdown-bar-progress"></div>
			<div class="question-index">
				Vraag 1/20
			</div>
		</div>
		
		<div class="flex-row">
			<div class="question-content">
				<div class="question-content-title card">
					{{ questions[index - 1 ].question }}
				</div>
				<div class="question-content-answers">
					<div class="question-content-answers-answer card"
					     @click="selectQuestion"
					     v-for="question in questions[index - 1].answers"
					     :key="question.question">{{ question }}
					</div>
				</div>
			</div>
			<div class="question-countdown">
				<div class="question-countdown-bar">
					<div class="question-countdown-bar-progress"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header"
import questiondata from "/src/utilities/data"
import {SOCKET} from "@/utilities/helpers"

export default {
	name : "Question",
	components : {Header},
	data() {
		return {
			questions   : questiondata,
			index       : this.$route.params.id
		}
	},
	methods : {
		selectQuestion(e) {
			
			document.querySelectorAll('.question-content-answers-answer').forEach(card => {
				card.classList.remove('active')
			})
			
			e.target.classList.toggle('active')
		}
	},
	mounted () {
		let progress = document.querySelector('.countdown-bar-progress')
		progress.addEventListener('animationend', () => {
			
			console.log('klaar met countdown')
			
			SOCKET.emit('load_next_state')
		})
	}
}
</script>

<style scoped>

</style>