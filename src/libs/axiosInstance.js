import axios from 'axios';

const axios_instance = axios.create({
  baseURL: "https://rupp-bakery-api.production.reachea.me/api/",
  // baseURL: 'http://localhost:8000/api/'
});

export default axios_instance;