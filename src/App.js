// App.js
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
import Dashboard from "./components/pages/dashboard"; // Import the Dashboard component
import ProtectedRoute from "./protectedRoutes"; // Import the ProtectedRoute component
import Details1 from "./components/pages/details1"
import Details2 from "./components/pages/details2"
import Details3 from "./components/pages/details3"
import Property from "./components/header/property";
import PropertiesDashboard from "./components/pages/propertiesDashboard";
import PTypesDashboard from "./components/pages/pTypesDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Route without Header */}
          <Route
            path="/dashboard/*"
            element={<Dashboard />}
          />
          <Route
            path="/properties/*"
            element={<PropertiesDashboard />}
          />
          <Route
            path="/ptypesdashboard/*"
            element={<PTypesDashboard />}
            />
          {/* Other Routes with Header */}
          <Route
            path="/*"
            element={
              <>
                <header><Header /></header>
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/topOffers" element={<Offers />} />
                    <Route path="/searchInOffers" element={<SearchInOffers />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/details1" element={<Details1 />} />
                    <Route path="/details2" element={<Details2 />} />
                    <Route path="/details3" element={<Details3 />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/details/:PropertyID" element={<Property />} />

                    <Route element={<ProtectedRoute allowedRole="admin" />}>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/properties" element={<PropertiesDashboard />} />
                      <Route path="/ptypesdashboard" element={<PTypesDashboard />} />

                    </Route>
                  </Routes>
                </main>
                <footer>
                  <Footer />
                </footer>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
