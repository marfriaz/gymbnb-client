import TokenService from "../services/token-service";
import config from "../config";

// const GymApiService = {
//   getGyms() {
//     return [
//       {
//         id: 1,
//         location: "san-francisco",
//         title: "Great Gym in SF!!!!",
//         price: "$31.69",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
//         date_created: "2020-08-23T22:35:15.559Z",
//         imgURLOne: 4,
//       },
//       {
//         id: 2,
//         location: "los-angeles",
//         title: "Great Gym in LA!!!!",
//         price: "$52.69",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
//         date_created: "2020-08-23T22:35:15.559Z",
//         imgURLOne: 5,
//       },
//     ];
//   },

//   getGymsByLocation(location) {
//     return [
//       {
//         id: 1,
//         location: "san-francisco",
//         title: "Great Gym in SF!!!!",
//         price: "$31.69",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
//         date_created: "2020-08-23T22:35:15.559Z",
//         imgURLOne: 4,
//       },
//       {
//         id: 2,
//         location: "los-angeles",
//         title: "Great Gym in LA!!!!",
//         price: "$52.69",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
//         date_created: "2020-08-23T22:35:15.559Z",
//         imgURLOne: 5,
//       },
//     ];
//   },

//   getGym(gymId) {
//     return [
//       {
//         id: 1,
//         location: "san-francisco",
//         title: "Great Gym in SF!!!!",
//         price: "$31.69",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
//         date_created: "2020-08-23T22:35:15.559Z",
//         imgURLOne: 4,
//       },
//       {
//         id: 2,
//         location: "los-angeles",
//         title: "Great Gym in LA!!!!",
//         price: "$52.69",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non. Adipisci, pariatur. Molestiae, libero esse hic adipisci autem neque?",
//         date_created: "2020-08-23T22:35:15.559Z",
//         imgURLOne: 5,
//       },
//     ];
//   },
// };

const GymApiService = {
  getGyms() {
    return fetch(`${config.API_ENDPOINT}/gyms`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getGymsByLocation(location) {
    return fetch(`${config.API_ENDPOINT.endpoint}/gyms/${location}`, {
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
