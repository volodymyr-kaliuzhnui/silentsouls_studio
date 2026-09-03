import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetails from "./pages/CardDetails";
import Cards from "./pages/Cards";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:slug" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
