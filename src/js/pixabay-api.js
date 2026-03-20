import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55106557-17a58ac065e1340b333cc7179';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
  .then(response => response.data);
};