import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';

const ROOT_URL = '/transaction';
const data = []

export function fetchProducts() {
  const request = axios.get(`${ROOT_URL}/`);
  request.then(function(request){
    data.push(request.data);
  });

  return {
    type: FETCH_PRODUCTS,
    payload: request,
    data: data
  };
}
