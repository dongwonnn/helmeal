import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'https://delivery-service-web.herokuapp.com/api';
// client.defaults.withCredentials = true;

export default client;
