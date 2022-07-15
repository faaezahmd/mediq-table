import OrdersTable from "../components/OrdersTable";
import SearchBar from "../components/SearchBar";

const Orders = (props) => {
  return (
    <div className="orders">
      <div className="container">

      <h1>Orders</h1>
      <SearchBar />
      <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
