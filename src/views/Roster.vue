<template>
    <v-container class="d-flex flex-column align-end">
        <player-list
            v-on:selected="openPlayer"
            :show-remove-buttons="editing"
        />
        <div class="d-flex flex-row">
            <v-btn
                class="mx-2"
                v-if="editing"
                fab
                dark
                color="blue"
                @click="newPlayer"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
            <v-btn
                v-if="!editing"
                class="mx-2"
                fab
                dark
                color="white"
                @click="editing = true"
            >
                <v-icon dark color="blue">
                    mdi-pencil-plus-outline
                </v-icon>
            </v-btn>
            <v-btn
                v-if="editing"
                class="mx-2"
                fab
                dark
                color="red"
                @click="editing = false"
            >
                <v-icon dark color="white">
                    mdi-pencil-plus-outline
                </v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import store from '@/store/index.js';
import PlayerList from '@/components/PlayerList';

export default {
    name: 'Roster',
    components: { PlayerList },
    data: () => {
        return {
            editing: false
        };
    },
    computed: {
        roster: () => store.state.roster,
        selectedPlayer: () => store.state.selectedPlayer
    },
    methods: {
        openPlayer(id) {
            this.$router.push(`/player/${id}`);
        },
        newPlayer() {
            store.commit('newPlayer');
            this.openPlayer(this.roster.length - 1);
        }
    }
};
</script>
<style scoped>
.steve {
    max-height: 95vh;
    overflow: scroll;
}
</style>
