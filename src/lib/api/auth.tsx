import { IAuth } from '../../types/IAuth';
import client from './client';
import axios from 'axios';
import { IRegister } from '../../types/IRegister';

export const login = ({ email, password }: IAuth) =>
  client.post('/auth/login', {
    email,
    password,
  });

export const register = ({
  email,
  password,
  phoneNum,
  birthday,
  userId,
  sex,
}: IRegister) =>
  client.post('/auth/register', {
    email,
    password,
    phoneNum,
    birthday,
    userId,
    sex,
  });

export const check = () => client.get('/auth/check');

export const logout = () => client.post('/auth/logout');
