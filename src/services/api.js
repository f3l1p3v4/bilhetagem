import axios from 'axios'

const api = axios.create({
  baseURL: "https://back-bilhetagem.onrender.com/",
})

export default api;
