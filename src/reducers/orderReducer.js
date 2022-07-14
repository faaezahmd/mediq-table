import {
    GET_ORDERS_BEGIN,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE,
  } from "../actions/types";


  const initialState = {
    list: [],
    isLoading: false,
    error: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDERS_BEGIN:
        return {
            ...state,
            isLoading: true
        }
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
            error: action.payload
        }
      default:
        return state;
    }
  };