import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appTitle: 'Crusaders Baseball 2021',
        roster: [
            {
                name: 'Thomas Dunphy',
                bats: 'Right',
                throws: 'Right'
            }
        ]
    },
    mutations: {
        initializeStore(state) {
            // Check if the ID exists
            if (localStorage.getItem('store')) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(
                        state,
                        JSON.parse(localStorage.getItem('store'))
                    )
                );
            }
        },
        newPlayer(state) {
            state.roster.push({ name: '', bats: '', throws: '' });
        },
        updatePlayer(state, { id, player }) {
            console.log('Player Recieved in Store');
            console.dir(player);
            state.roster[id] = player;
            console.dir(state.roster);
        },
        removePlayer(state, playerId) {
            state.roster.splice(playerId, 1);
        }
    }
});
