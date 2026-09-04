import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CardDetails from "./pages/CardDetails";
import Cards from "./pages/Cards";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Socials from "./pages/Socials";

function App() {
  return (
    <BrowserRouter basename="/silentsouls_studio">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:slug" element={<CardDetails />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
