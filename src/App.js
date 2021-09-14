import { Header } from "./components";
import { Home, Card } from "./Pages";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/card" component={Card}/>
      </div>
    </div>
  );
}

export default App;
