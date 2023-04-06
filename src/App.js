import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<About />} />
          <Route path='help' element={<Help />} />
          <Route path='unit' element={<Help />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='our-process' element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
