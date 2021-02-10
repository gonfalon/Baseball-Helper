<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-main transition="slide-x-transition">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import store from '@/store/index.js';

export default {
    name: 'App',
    components: {
        AppNavigation
    },
    sore: store
};
</script>

<style></style>
