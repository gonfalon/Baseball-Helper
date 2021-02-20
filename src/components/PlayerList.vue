<template>
    <v-container>
        <v-card>
            <v-list>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(player, index) in roster" :key="index">
                        <v-list-item-icon
                            v-if="showRemoveButtons"
                            @click="removePlayer(index)"
                        >
                            <v-icon color="red">mdi-trash-can-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-icon
                            v-if="!showRemoveButtons"
                            @click="playerSelected(index)"
                        >
                            <v-icon color="blue">mdi-account-edit</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content @click="playerSelected(index)">
                            <v-list-item-title>
                               {{ player.name }}
                            </v-list-item-title>
                            <v-list-item-title>
                               {{player.bats[0]}}/{{player.throws[0]}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
import store from '@/store/index.js';

export default {
    name: 'PlayerList',
    props: {
        showRemoveButtons: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        roster: () => store.state.roster
    },
    methods: {
        playerSelected(playerId) {
            this.$emit('selected', playerId);
        },
        removePlayer(playerId) {
            store.commit('removePlayer', playerId);
        }
    }
};
</script>

<style scoped></style>
