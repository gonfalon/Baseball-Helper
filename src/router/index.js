import Vue from 'vue';
import VueRouter from 'vue-router';
import Roster from '@/views/Roster';

Vue.use(VueRouter);

let win = null;

const routes = [
    {
        path: '/',
        name: 'home',
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
            if (!win || win.closed) {
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
