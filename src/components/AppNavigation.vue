<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            color="light-blue darken-4"
            dark
            disable-resize-watcher
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
        </v-navigation-drawer>
        <v-app-bar app elevate-on-scroll color="light-blue darken-4" dark>
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
                    title: 'Depth Chart',
                    to: '/deptchart',
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
