import axios from 'axios'

const api = axios.create({
  baseURL: "https://ekv8js.sse.codesandbox.io/",
})

export default api;
