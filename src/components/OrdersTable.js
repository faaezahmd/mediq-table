import { useEffect } from "react";
import { getOrders } from "../actions/orderActions";
import { useDispatch } from "react-redux";

const OrdersTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  
  return (
    <table>
      <thead>
        <tr>
          <td>Order#</td>
          <td>Order Status</td>
          <td>Customer</td>
          <td>Purchase Date</td>
          <td>Fulfilled Date</td>
          <td>Invoice Status</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default OrdersTable;
