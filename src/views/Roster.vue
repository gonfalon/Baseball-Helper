<template>
    <v-container class="d-flex flex-row align-left">
        <player-list v-model="selectedPlayer" />
        <v-spacer></v-spacer>
        <v-card class="detail">
            <h1>{{ roster[selectedPlayer] }}</h1>
        </v-card>
    </v-container>
</template>

<script>
import store from '@/store/index.js';
import PlayerList from '@/components/PlayerList';

export default {
    name: 'Roster',
    components: { PlayerList },
    computed: {
        roster: () => store.state.roster,
        selectedPlayer: () => store.state.selectedPlayer
    }
};
</script>

<style scoped>
.detail {
    width: 75%;
    min-height: 75%;
    text-align: center;
}
</style>
