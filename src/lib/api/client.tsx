import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:4000/api/';
client.defaults.withCredentials = true;

export default client;
