import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Home";
import CardProductList from "./Pages/CardProductList";
import "./App.css";
import MakeAnOrder from "./Pages/MakeAnOrder";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/card-description" element={<CardProductList />} />
        <Route path="/make-the-order" element={<MakeAnOrder />} />
      </Routes>
    </div>
  );
}

export default App;
