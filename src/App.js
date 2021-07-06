import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import DetailProduct from "./components/Products/DetailProduct";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <DetailProduct />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
