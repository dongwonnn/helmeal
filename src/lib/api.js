//https://delivery-service-web.herokuapp.com/api/documentation
import axios from 'axios';

export const getCategories = () =>
  axios.get('http://localhost:4000/categories');

export const getStores = () => axios.get('http://localhost:4000/stores');

export const getDetails = (storeId) =>
  axios.get(
    `https://delivery-service-web.herokuapp.com/api/eateries/${storeId}`,
  );

export const getMenus = (menuId) =>
  axios.get(`https://delivery-service-web.herokuapp.com/api/menus/${menuId}`);
