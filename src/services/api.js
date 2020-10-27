import axios from 'axios'

const api = axios.create({
  baseURL: "https://backend-bilhetagem.herokuapp.com",
})

export default api;