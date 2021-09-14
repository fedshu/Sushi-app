import { Header } from "./components";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
