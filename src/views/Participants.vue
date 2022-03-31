<template>
	<div class="participants">
		<Header />
		<QR />
		<Title content="Deelnemers" />
		<div class="participants-list">
			<Card :content="user.name" v-for="user in users" :key="user"/>
		</div>
	</div>
</template>

<script>
import Title from "@/components/Title"
import QR from "@/components/QR"
import Card from "@/components/Card"
import Header from "@/components/Header"
import {SOCKET} from "@/utilities/helpers"

export default {
	name : "Participants",
	components : {Header, Card, QR, Title},
	data() {
		return {
			users : []
		}
	},
	mounted () {
		
		if(localStorage.getItem('name') === 'null') {
			this.$router.push({name: 'Entername'})
		}
		
		SOCKET.emit('get_users');
		
		SOCKET.on('get_users', data => {
			this.users = data
		})
		
		SOCKET.on('user_joined', data => {
			this.users = data.users
		})
		
		SOCKET.on('join', data => {
			this.users = data
		})
	},
	watch: {
		$route(to, from) {
			const toDepth = to.path.split("/").length;
			const fromDepth = from.path.split("/").length;
			this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
		},
	},
}
</script>