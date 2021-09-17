import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { getSushi } from "./redux/actions";
import { Home, Card } from "./pages";
import { Header } from "./components";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSushi());
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