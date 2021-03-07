<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            color="blue darken-3"
            dark
            disable-resize-watcher
            temporary
        >
            <v-list>
                <v-list-item
                    v-for="(item, index) in buttons"
                    :key="index"
                    :to="item.to"
                    @click="drawer = false"
                >
                    <v-list-item-icon>
                        <v-icon large color="white">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content v-text="item.title" />
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <v-btn width="100%" color="blue darken-2">Import</v-btn>
                <v-btn width="100%" color="blue darken-2">Export</v-btn>
            </template>
        </v-navigation-drawer>
        <v-app-bar app elevate-on-scroll color="blue darken-3" dark>
            <v-app-bar-nav-icon @click="drawer = true" />
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
import store from '@/store/index.js';

export default {
    name: 'AppNavigation',
    data: () => {
        return {
            drawer: false,
            buttons: [
                { title: 'Roster', to: '/roster', icon: 'mdi-account-group' },
                { title: 'Drills', to: '/drills', icon: 'mdi-baseball' },
                {
                    title: 'Field',
                    to: '/field',
                    icon: 'mdi-baseball-diamond'
                }
            ]
        };
    },
    computed: {
        appTitle: () => store.state.appTitle
    }
};
</script>

<style scoped>
a,
a:visited {
    color: white;
    text-decoration: none;
}
</style>
