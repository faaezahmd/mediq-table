import {
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  SET_SEARCH_QUERY,
} from "../actions/types";

const initialState = {
  list: [],
  searchQuery: "",
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
