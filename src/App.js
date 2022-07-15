import logo from "./logo.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link
          to="/orders"
          style={{ "font-size": "21px", padding: "12px", display: "block" }}
        >
          Orders
        </Link>
      </nav>
    </div>
  );
}

export default App;
