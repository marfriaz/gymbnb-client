import TokenService from "../services/token-service";
import config from "../config";

const GymApiService = {
  getGyms() {
    return fetch(`${config.API_ENDPOINT}/gyms`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getGym(gymId) {
    return fetch(`${config.API_ENDPOINT}/gyms/${gymId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getGymsByLocation(location) {
    return fetch(`${config.API_ENDPOINT}/gyms/location/${location}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  // postGym({ title, description, max_guest, location, price, img_urls }) {
  postGym({ formData }) {
    return fetch(`${config.API_ENDPOINT}/gyms`, {
      method: "POST",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: formData,
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default GymApiService;
