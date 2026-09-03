import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import CardDetails from "./pages/CardDetails";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Socials from "./pages/Socials";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:slug" element={<CardDetails />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
