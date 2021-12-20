const initialState = {
  allProducts: [],
  loading: false,
  error: null,
  productsPerPage: 10,
  currentPage: 1,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALLPRODUCTS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ALLPRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      };
    case 'GET_ALLPRODUCTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'SET_PRODUCTS_PER_PAGE':
      return {
        ...state,
        productsPerPage: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
