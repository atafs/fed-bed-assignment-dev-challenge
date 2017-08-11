import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';

const ROOT_URL = '/api/products';

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}/`);
  console.log(request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}
