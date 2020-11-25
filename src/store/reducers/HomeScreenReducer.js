import { HOME_FETCH, HOME_FETCH_SUCCESS, HOME_FETCH_FAILURE } from "../types";

const initialValue = {
  categories: [
    "cars",
    "clothing",
    "computers",
    "dogs",
    "phones",
    "playstation",
    "watches",
  ],
  products: [],
  isLoading: false,
  error: "",
};

export const HomeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case HOME_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case HOME_FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        categories: action.payload.categories,
        products: action.payload.products,
        isLoading: false,
      };
    case HOME_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
