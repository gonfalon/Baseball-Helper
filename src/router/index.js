import Vue from 'vue';
import VueRouter from 'vue-router';
import Roster from '@/views/Roster';
import Home from '@/views/Home';

Vue.use(VueRouter);

let win = null;

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/roster',
        name: 'roster',
        component: Roster
    },
    {
        path: '/drills',
        name: 'drills',
        beforeEnter: () => {
            if (!win) {
                win = window.open('https://baseball-tutorials.com');
            } else {
                win.focus();
            }
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
