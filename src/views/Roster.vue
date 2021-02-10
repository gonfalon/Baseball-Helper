<template>
    <v-container class="d-flex flex-row align-left">
        <v-card class="rosterList">
            <v-list>
                <v-list-item-group v-model="selectedPlayer" color="primary">
                    <v-list-item
                        v-for="(player, index) in roster"
                        :key="index"
                        @click="selectedPlayer = index"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ player }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <v-spacer></v-spacer>
        <v-card class="detail">
            <h1>{{ roster[selectedPlayer] }}</h1>
        </v-card>
    </v-container>
</template>

<script>
import store from '@/store/index.js';

export default {
    name: 'Template',
    data: () => {
        return { selectedPlayer: 1 };
    },
    computed: {
        roster: () => store.state.roster
    }
};
</script>

<style scoped>
.rosterList {
    width: 20%;
    height: 90%;
}
.detail
{
    width: 75%;
    min-height: 75%;
    text-align: center;
}
</style>
