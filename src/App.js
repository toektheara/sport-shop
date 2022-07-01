import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Category from "./pages/CategoryCake";

import "./App.css";
import { MeContextProvider } from "./context/MeContext";
import { AuthContextProvider } from "./context/AuthContext";
import Authentication from "./context/Authentication";
import Home from "./pages/Home";
import Cake from "./pages/Cake";
import Shop from "./pages/Shop";
import ShowItemSelectd from "./pages/ShowItemSelected";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <MeContextProvider>
      <AuthContextProvider>
        <Authentication>
          <CartProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cake" component={Cake} />
                <Route path="/shop" component={Shop} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/category" component={Category} />
                <Route path="/view-item" component={ShowItemSelectd} />
              </Switch>
            </div>
          </Router>
          </CartProvider>
        </Authentication>
      </AuthContextProvider>
    </MeContextProvider>
  );
}

export default App;
