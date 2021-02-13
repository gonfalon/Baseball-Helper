<template>
    <v-card class="rosterList">
        <v-list>
            <v-list-item-group v-model="playerId"
                color="primary"
            >
                <v-list-item v-for="(player, index) in roster" :key="index" @click="playerSelected(index)">
                    <v-list-item-content>
                        <v-list-item-title>{{ player }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
import store from '@/store/index.js';

export default {
    name: 'PlayerList',
    data: () => {
        return { playerId: store.state.selectedPlayer };
    },
    computed: {
        roster: () => store.state.roster
    },
    methods: {
        playerSelected: (playerId) => {
            store.commit('selectPlayer', playerId)
        }
    }
};
</script>

<style scoped>
.rosterList {
    width: 20%;
    height: 90%;
}
</style>
