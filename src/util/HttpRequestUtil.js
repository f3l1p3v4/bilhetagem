import API_URL from '../services/api';

export default {
  //Bushes
  async searchBushes() {
    return API_URL
      .get("/all")
      .then(response => response.data);
  },
  async saveBushes(bus) {
    return API_URL
      .post("/bushes", bus)
      .then(response => response.data);
  },
  async filterBushes(categorie) {
    return API_URL
      .get("/bushes", {
        headers: {
          categorie: categorie
        }
      })
      .then(response => response.data);
  },
  async changeStatus(bus) {
    return API_URL
      .put("/bushes", bus)
      .then(response => response.data);
  },
};