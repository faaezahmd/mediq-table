import logo from "./logo.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/orders">Orders</Link>
      </nav>
    </div>
  );
}

export default App;
