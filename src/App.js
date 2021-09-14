import React, { useState, useEffect } from "react";
import { Header } from "./components";
import { Home, Card } from "./pages";
import { Route } from "react-router-dom";
import { api } from "./api";

function App() {
  const [sushiList, setSushiList] = useState([]);

  useEffect(() => {
    api.get("/sushi").then((result) => setSushiList(result.sushi));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home sushi={sushiList} />} />
        <Route exact path="/card" component={Card} />
      </div>
    </div>
  );
}

export default App;
