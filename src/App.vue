<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-main class="theContent">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
