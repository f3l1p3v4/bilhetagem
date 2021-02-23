import Vue from 'vue';
import Vuex from 'vuex';

import car from './car';

Vue.use(Vuex);

export default function () {
    const Store = new Vuex.Store({
        modules: {
            car
        },

        strict: process.env.DEV
    })

    return Store;
}