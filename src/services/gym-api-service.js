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
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postGym(location, price, title, description, imgURLOne) {
    return fetch(`${config.API_ENDPOINT}/gyms`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        location,
        price,
        title,
        description,
        imgURLOne,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default GymApiService;
