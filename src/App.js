import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Home from "./components/pages/home";
import Offers from "./components/pages/offers";

function App() {
  return (
    <>
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </header>
    <main>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </main>
    <footer>

    </footer>
    </>
  );
}

export default App;
