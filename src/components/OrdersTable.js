import { useEffect, useState } from "react";
import { getOrders } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../utils";
import "./OrdersTable.scss";

const OrderRow = ({ rowData }) =>
  rowData.map((order, index) => (
    <tr key={index}>
      <td>{order.orderID}</td>
      <td>
        <div className={"status " + order.orderStatus.toLowerCase()}>
          {order.orderStatus}
        </div>
      </td>
      <td>
        <div style={{ "font-weight": "600" }}>{order.companyName}</div>
        <div style={{ color: "#8284a0" }}>{order.customerName}</div>
      </td>
      <td>{order.purDate}</td>
      <td>{order.fulfillDate}</td>
      <td>{order.invoiceStatus}</td>
      <td>
        <div style={{ "font-weight": "600" }}>
          {order.currency} {order.amount.toFixed(2)}
        </div>
      </td>
      <td>
        <button className="order-options-dropdown">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </td>
    </tr>
  ));
const OrdersTable = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.orders.list);
  const searchQuery = useSelector((state) => state.orders.searchQuery);
  const isLoading = useSelector((state) => state.orders.isLoading);
  const [filteredOrders, setFilteredOrders] = useState(null);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    if (searchQuery.length > 2) {
      setFilteredOrders(searchItem(ordersList, searchQuery));
    }
  }, [searchQuery]);

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order#</th>
          <th>Order Status</th>
          <th>Customer</th>
          <th>Purchase Date</th>
          <th>Fulfilled Date</th>
          <th>Invoice Status</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {searchQuery.length > 2
          ? filteredOrders && <OrderRow rowData={filteredOrders} />
          : ordersList && <OrderRow rowData={ordersList} />}
      </tbody>
    </table>
  );
};

export default OrdersTable;
