import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = "https://backend-bilhetagem.herokuapp.com",

Vue.prototype.$axios = axios;