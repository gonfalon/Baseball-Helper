<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="light-blue darken-4"
            dark
            disable-resize-watcher
        >
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.to"
                    link
                    @click="drawer = !drawer"
                >
                    <v-list-item-title>
                        {{ item.title }}
                    </v-list-item-title>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="light-blue darken-4" dark>
            <v-app-bar-nav-icon
                v-if="!drawer"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <router-link to="/">
                <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            </router-link>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Crusaders Baseball',
            drawer: false,
            items: [
                { title: 'Home', to: '/' },
                { title: 'Roster', to: '/roster' },
                { title: 'Drills', to: '/drills' },
                { title: 'Join', to: '/3' }
            ]
        };
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
