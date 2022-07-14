import OrdersTable from "../components/OrdersTable";
import SearchBar from "../components/SearchBar";

const Orders = (props) => {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <SearchBar />
      <OrdersTable />
    </div>
  );
};

export default Orders;
