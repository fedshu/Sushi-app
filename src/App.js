import React, { useEffect } from "react";
import { Header } from "./components";
import { Home, Card } from "./pages";
import { Route } from "react-router-dom";
import { api } from "./api";

function App() {
  
  useEffect(() => {
    console.log("api", api.get("/sushi"));
  }, []);

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
