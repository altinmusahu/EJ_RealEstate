import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Home from "./components/pages/home";

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
    </main>
    <footer>

    </footer>
    </>
  );
}

export default App;
