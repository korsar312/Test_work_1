import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        img:[],         //тут скаченные json

        row: 6,         //количество в категории
        amountImg: 24,  //сколько качать json объектов

    },
    getters: {},
    mutations: {},
    actions: {},
});