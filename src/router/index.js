import Vue from 'vue';
import VueRouter from 'vue-router';
import Roster from '@/views/Roster';
import Player from '@/views/Player';
import Home from '@/views/Home';
import Field from '@/views/Field';

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
            if (!win || win.closed) {
                win = window.open('https://baseball-tutorials.com');
            } else {
                win.focus();
            }
        }
    },
    {
        path: '/player/:id',
        name: 'player',
        component: Player,
        props: true
    },
    {
        path: '/field',
        name: 'field',
        component: Field
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
