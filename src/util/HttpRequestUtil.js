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
  async changeBus(bus) {
    return API_URL
      .put("/bus", bus)
      .then(response => response.data);
  },
  async deleteBus(busID) {
    return API_URL
      .delete(`/bushes/${busID}`)
      .then(response => response.data);
  },
  //Infos
  async searchInfos() {
    return API_URL
      .get("/info")
      .then(response => response.data);
  },
  async saveInfos(info) {
    return API_URL
      .post("/info", info)
      .then(response => response.data);
  },
};