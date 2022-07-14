import {
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from "./types";
import {orders} from "../data";

// ACTION CREATORS
export const getOrdersBegin = () => ({
  type: GET_ORDERS_BEGIN,
});

export const getOrdersSuccess = (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
});

export const getOrdersFailure = (error) => ({
  type: GET_ORDERS_FAILURE,
  payload: error,
});

export function getOrders() {
    return async function (dispatch) {
        await dispatch(getOrdersBegin());
        await dispatch(getOrdersSuccess(orders));
        if(!orders) {
            await dispatch(getOrdersFailure("Internal Server Error 500!"));
        }
    };
  }