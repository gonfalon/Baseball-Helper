<template>
    <v-container class="full">
        <v-row>
            <v-col>
                <v-select
                    :items="leftFielders"
                    item-text="name"
                    item-value="name"
                    label="Left Field"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="centerFielders"
                    item-text="name"
                    item-value="name"
                    label="Center Field"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="rightFielders"
                    item-text="name"
                    item-value="name"
                    label="Right Field"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="shortstops"
                    item-text="name"
                    item-value="name"
                    label="Shortstop"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="secondBasemen"
                    item-text="name"
                    item-value="name"
                    label="Second Base"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-col>
                <v-select
                    :items="thirdBasemen"
                    item-text="name"
                    item-value="name"
                    label="Third Base"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="pitchers"
                    item-text="name"
                    item-value="name"
                    label="Pitcher"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="firstBasemen"
                    item-text="name"
                    item-value="name"
                    label="First Base"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <v-select
                    :items="catchers"
                    item-text="name"
                    item-value="name"
                    label="Catcher"
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script>
import store from '@/store/index';

export default {
    name: 'Field',
    computed: {
        roster: function() {
            return store.state.roster;
        },
        pitchers: function() {
            return this.roster.filter(player => player.p);
        },
        catchers: function() {
            return this.roster.filter(player => player.c);
        },
        firstBasemen: function() {
            return this.roster.filter(player => player.first);
        },
        secondBasemen: function() {
            return this.roster.filter(player => player.second);
        },
        shortstops: function() {
            return this.roster.filter(player => player.short);
        },
        thirdBasemen: function() {
            return this.roster.filter(player => player.third);
        },
        leftFielders: function() {
            return this.roster.filter(player => player.left);
        },
        rightFielders: function() {
            return this.roster.filter(player => player.right);
        },
        centerFielders: function() {
            return this.roster.filter(player => player.center);
        }
    }
};
</script>

<style scoped></style>
