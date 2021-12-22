import axios from 'axios';

export const getProducts = (page = 2, limit = 10) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'GET_ALLPRODUCTS_LOADING',
      });

      const response = await axios.get(`http://localhost:5000/products`);
      const { data } = await axios.get(
        `http://localhost:5000/products?_page=${page}&_limit=${limit}`,
      );
      console.log(data);

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
