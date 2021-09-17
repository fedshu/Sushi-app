import React from "react";
import { Route } from "react-router-dom";
import { Home, Card } from "./pages";
import { Header } from "./components";

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/card" component={Card} />
      </div>
    </div>
  );
}

export default App;