import React from "react";
import { Route } from "react-router-dom";
import { Home, Cart } from "./pages";
import { Header } from "./components";

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="Sushi-app/" component={Home} />
        <Route exact path="Sushi-app/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;