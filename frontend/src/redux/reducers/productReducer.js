import {
  SEARCH__PRODUCT_ERROR,
  SEARCH__PRODUCT_REQUEST,
  SEARCH__PRODUCT_SUCCESS,
} from '../constants/ProductConstans';

const initialState = {
  allProducts: [],
  loading: false,
  error: null,
  productsPerPage: 6,
  currentPage: 1,
  productsCount: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'ENG_LOADING':
      return {
        ...state,
        loading: false,
      };
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
    case 'SET_PRODUCTS_COUNT':
      return {
        ...state,
        productsCount: action.payload,
      };
    case SEARCH__PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH__PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload.searchResults,
        productsCount: action.payload.productsCount,
        loading: false,
        currentPage: 1,
      };
    case SEARCH__PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
