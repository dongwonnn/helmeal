import client from './client';

// https://delivery-service-web.herokuapp.com/api
// "homepage": "http://dongwonnn.github.io/delivery-service",

export const login = ({ email, password }) =>
  client.post('/auth/login', {
    email,
    password,
  });

export const register = ({ name, email, password }) =>
  client.post('/auth/register', {
    name,
    email,
    password,
  });

export const check = () => client.get('/auth/user');

export const logout = () => client.delete('/auth/logout');
