import Vue from 'vue';
import AuthEngine from '../lib/Authorization';

export default async ({ store }) => {
    Vue.prototype.$auth = new AuthEngine(store);
}