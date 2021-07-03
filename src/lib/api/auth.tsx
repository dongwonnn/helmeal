import { IAuth } from '../../types/IAuth';
import client from './client';
import axios from 'axios';

export const login = ({ email, userId, password }: IAuth) =>
  client.post('/auth/login', {
    email,
    userId,
    password,
  });

export const register = ({ email, userId, password }: IAuth) =>
  client.post('/auth/register', {
    userId,
    email,
    password,
  });

export const check = () => client.get('/auth/check');

export const logout = () => client.post('/auth/logout');
