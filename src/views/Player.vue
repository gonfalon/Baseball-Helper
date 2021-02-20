<template>
    <v-container>
        <v-card class="pa-5">
            <v-btn icon @click="back">
                <v-icon dark>
                    mdi-arrow-left
                </v-icon>
            </v-btn>
            <v-form class="d-flex flex-column" @submit.prevent>
                <v-container>
                    <v-text-field @change="updatePlayer" v-model="player.name" label="Name"></v-text-field>
                </v-container>
                <v-container class="d-flex flex-row">
                    <v-radio-group v-model="player.bats" @change="updatePlayer" label="Bats" class="ma-5">
                        <v-radio label="Right" value="Right"/>
                        <v-radio label="Left"  value="Left" />
                    </v-radio-group>
                    <v-radio-group v-model="player.throws" @change="updatePlayer" label="Throws" class="ma-5">
                        <v-radio label="Right" value="Right"/>
                        <v-radio label="Left" value="Left"/>
                    </v-radio-group>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import store from '@/store/index'

export default {
    name: 'Player',
    props: {
        id: String
    },
    data: () => {
        return {
            player: {
                name: '',
                bats:'',
                throws: '',
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        updatePlayer(){
            let id = this.$props.id;
            let player = this.player;
            console.log(`store.commit('updatePlayer', ${id}`);
            console.dir(player)
            store.commit('updatePlayer', { id, player } )
        }
    },
    created() {
        this.player = store.state.roster[this.$props.id];
    }
};
</script>

<style scoped></style>
