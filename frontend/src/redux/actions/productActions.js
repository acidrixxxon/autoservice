import axios from 'axios';
import {
  SEARCH__PRODUCT_ERROR,
  SEARCH__PRODUCT_REQUEST,
  SEARCH__PRODUCT_SUCCESS,
} from '../constants/ProductConstans';

export const getProducts = (page = 1, limit = 10) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'GET_ALLPRODUCTS_LOADING',
      });

      const response = await axios.get(`http://localhost:5000/products`);
      const { data } = await axios.get(
        `http://localhost:5000/products?_page=${page}&_limit=${limit}`,
      );

      dispatch({
        type: 'SET_PRODUCTS_COUNT',
        payload: response.data.length,
      });
      dispatch({
        type: 'GET_ALLPRODUCTS_SUCCESS',
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'GET_ALLPRODUCTS_ERROR',
        payload: error,
      });
    }
  };
};

// export const searchProducts =
//   (query, page = 1, limit = 6) =>
//   async (dispatch, getState) => {
//     try {
//       const { products } = getState();

//       dispatch({
//         type: SEARCH__PRODUCT_REQUEST,
//       });

//       const request = await axios.get(`http://localhost:5000/products?mark=${query}`);
//       const productsCount = request.data.length;
// const { data } = await axios.get(
//   `http://localhost:5000/products?mark=${query}&_page=${page}&_limit=${limit}`,
// );
// console.log(data);

//       setTimeout(() => {
//         dispatch({
//           type: SEARCH__PRODUCT_SUCCESS,
//           payload: {
//             searchResults: data,
//             productsCount,
//           },
//         });
//       }, 200);
//     } catch (error) {
//       console.log(error);

//       dispatch({
//         type: SEARCH__PRODUCT_ERROR,
//         payload: error,
//       });
//     }
//   };

export const searchProducts =
  (query, page = 1, limit = 8) =>
  async (dispatch) => {
    try {
      dispatch({ type: SEARCH__PRODUCT_REQUEST });

      const request = await axios.get(`http://localhost:5000/products?mark=${query}`);
      const productsCount = request.data.length;

      const { data } = await axios.get(
        `http://localhost:5000/products?mark=${query}&_page=${page}&_limit=${limit}`,
      );
      console.log(data);

      if (data.length > 0) {
        dispatch({
          type: SEARCH__PRODUCT_SUCCESS,
          payload: {
            searchResults: data,
            productsCount,
          },
        });
      } else {
        dispatch({
          type: SEARCH__PRODUCT_ERROR,
          payload: 'Товар не найден!',
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: SEARCH__PRODUCT_ERROR,
        payload: error,
      });
    }
  };
