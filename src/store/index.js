import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appTitle: 'Crusaders Baseball 2021',
        selectedPlayer: null,
        roster: [
            'Thomas Dunphy',
            'Caleb Wilson',
            'Frank Scarchilli',
            'Anthony Palumbo',
            'Stephen Buonocore',
            'Stephen Pascoe',
            'Max Henri',
            'Rodolfo Llobet',
            'Tom Sullivan',
            'Sean Bennett',
            'Michael Blank',
            'Michael Ciskanic',
            'Rok Urankar',
            'Andrew Smith',
            'Aganze Nkere'
        ]
    },
    mutations: {
        selectPlayer(state, id)
        {
            state.selectedPlayer = id;
        }
    },
    actions: {},
    modules: {}
});
