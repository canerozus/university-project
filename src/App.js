import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import { Router, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Login />
    </div>
  );
}

export default App;
