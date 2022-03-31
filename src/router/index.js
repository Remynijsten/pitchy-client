import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Participants from "@/views/Participants"
import Countdown from "@/views/Countdown"
import Question from "@/views/Question"
import Story from "@/views/Story"
import Subresults from "@/views/Subresults"
import Endresults from "@/views/Endresults"
import Entername from "@/views/Entername"
import Admin from "@/views/Admin"

const routes = [
    {
        path: '/participants',
        name: 'Participants',
        component: Participants
    },
    {
        path: '/countdown',
        name: 'Countdown',
        component: Countdown
    },
    {
        path: '/question/:id',
        name: 'Question',
        component: Question
    },
    {
        path: '/story/:id',
        name: 'Story',
        component: Story
    },
    {
        path: '/subresults',
        name: 'Subresults',
        component: Subresults
    },
    {
        path: '/endresults',
        name: 'Endresults',
        component: Endresults
    },
    {
        path: '/',
        name: 'Entername',
        component: Entername
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
