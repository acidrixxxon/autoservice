import {
  CLEAR__ERROR,
  SEARCH__PRODUCT_ERROR,
  SEARCH__PRODUCT_REQUEST,
  SEARCH__PRODUCT_SUCCESS,
  SET__FILTERS,
} from '../constants/ProductConstans';

const initialState = {
  allProducts: [],
  loading: false,
  error: null,
  productsPerPage: 8,
  currentPage: 1,
  productsCount: 0,
  filters: [],
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
        allProducts: [],
        loading: true,
      };
    case SEARCH__PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: action.payload.searchResults,
        productsCount: action.payload.productsCount,
        loading: false,
      };
    case SEARCH__PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        allProducts: [],
      };
    case CLEAR__ERROR:
      return {
        ...state,
        error: null,
      };
    case SET__FILTERS:
      return {
        ...state,
        filters: [...state.filters, action.payload],
        allProducts: [...state.allProducts.filter((item) => item.new === action.payload.value)],
      };
    default:
      return state;
  }
};
