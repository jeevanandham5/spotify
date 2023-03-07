import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
