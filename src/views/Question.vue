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
			index       : this.$route.params.id,
			timescore   : 10000,
			intervaller : setInterval(() => {}),
			selection   : '',
			submitted   : false
		}
	},
	methods : {
		selectQuestion(e) {
			
			if(!this.submitted)
			{
				document.querySelectorAll('.question-content-answers-answer').forEach(card => {
					card.classList.remove('active')
				})
				
				e.target.classList.toggle('active')
				
				clearInterval(this.intervaller)
				
				if(e.target.innerText === questiondata[this.$route.params.id - 1].correct.toUpperCase())
				{
					SOCKET.emit('question', {event : 'submit', score: this.timescore, username: localStorage.getItem('name')})
				} else {
					SOCKET.emit('question', {event : 'submit', score: 0, username: localStorage.getItem('name')})
				}
			
				this.submitted = true
			}
		}
	},
	mounted () {
		
		this.submitted = false
		console.log('setting submit to flase')
		
		let progress = document.querySelector('.countdown-bar-progress')
		progress.addEventListener('animationend', () => {
			parseInt(localStorage.getItem('admin')) ? SOCKET.emit('load_next_state') : ''
		})
		
		this.intervaller = setInterval(() => {
			this.timescore--
			
			this.timescore === 10 ? clearInterval(this.intervaller) : ''
		}, 1)
		
		SOCKET.on('question', args => {
			localStorage.setItem('winners', JSON.stringify(args.winners))
			localStorage.setItem('losers', JSON.stringify(args.losers))
		})
	}
}
</script>

<style scoped>

</style>