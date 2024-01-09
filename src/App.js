import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Home from "./components/pages/home";
import Offers from "./components/pages/offers";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";
import SearchInOffers from "./components/header/searchInOffers";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
        
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/topOffers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />


        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
