<template>
	<div class="admin">
		<Header />
		<Title content="Admin" />
		<Button content="Create New Session" @click="newSession"/>
		<Button content="Enter name" @click="$router.push('/')"/>
		<Button content="Participants page" @click="$router.push('/participants')"/>
	</div>
</template>

<script>
import Button from "@/components/Button"
import {SOCKET} from "@/utilities/helpers"
import Header from "@/components/Header"
import Title from "@/components/Title"

export default {
	name : "Admin",
	components : {Title, Header, Button},
	methods : {
		newSession() {
			SOCKET.emit('session', {event: 'create'})
		}
	}
}
</script>