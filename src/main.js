import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

var app = new Vue({
    router,
    store,
    vuetify,
    beforeCreate() {
        this.$store.commit('initializeStore');
    },
    render: h => h(App)
}).$mount('#app');

app.$store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem('store', JSON.stringify(state));
});
