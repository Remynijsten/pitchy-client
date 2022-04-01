<template>
	<transition>
		<div class="wrapper">
			<div class="entername">
				<Header />
				<Title content="Vul je naam in" />
				<div class="entername-content flex justify-center items-center flex-col">
					<Input placeholder="Jouw naam" v-model="username" maxlength="10"/>
					<Button content="DEELNEMEN" class="button-gold" @click="createUser"/>
				</div>
			
			</div>
		</div>
	</transition>
</template>

<script>
import Header from "@/components/Header"
import Title from "@/components/Title"
import Input from "@/components/Input"
import Button from "@/components/Button"
import { SOCKET } from "/src/utilities/helpers"
import { useToast } from "vue-toastification";

export default {
	name : "Entername",
	components : {Button, Input, Title, Header},
	setup() {
		const toast = useToast();
		
		return { toast }
	},
	data() {
		return {
			username: ""
		}
	},
	methods : {
		createUser() {
			if(this.username !== "") {
				SOCKET.emit('add_user', {name : this.username})
			} else this.toast.warning("Vul een naam in");
		}
	},
	mounted() {
		SOCKET.on('username_error', data => this.toast.error(data.error))
		
		SOCKET.on('add_user', () => {
			localStorage.setItem('name', this.username);
			
			this.username === 'Remy' ? localStorage.setItem('admin', '1') : localStorage.setItem('admin', '0')
			
			this.$router.push({name : 'Participants'})
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

<style scoped>

</style>