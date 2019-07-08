import axios from 'axios';

const restclient = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
});

export default restclient;
