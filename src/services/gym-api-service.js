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
    return fetch(`${config.API_ENDPOINT.endpoint}/gyms/location/${location}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postGym(
    title,
    user_id,
    description,
    guests,
    location,
    price,
    img_url_one,
    img_url_two,
    img_url_three,
    img_url_four,
    img_url_five
  ) {
    return fetch(`${config.API_ENDPOINT}/gyms`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        //check user id
        user_id,
        description,
        guests,
        location,
        price,
        img_url_one,
        img_url_two,
        img_url_three,
        img_url_four,
        img_url_five,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default GymApiService;
