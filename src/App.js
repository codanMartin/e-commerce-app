import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentification from "./routes/authentification/Authentication.jsx";
import Shop from "./routes/shop/Shop.jsx";
import Checkout from "./routes/checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
