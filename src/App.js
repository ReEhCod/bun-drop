import "./App.css";
import "./Meny.css";
import "./ShopingCart.css";
import "./Payment.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hem from "./routes/Hem";
import Meny from "./routes/Meny";
import Beställning from "./routes/Beställning";
import Betalning from "./routes/Betalning";
import NotFound from "./routes/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { OrderProvider } from "./contexts/OrderContext";

function App() {
  return (
    <div className="App">
      <OrderProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/meny" element={<Meny />} />
          <Route path="/beställning" element={<Beställning />} />
          <Route path="/betalning" element={<Betalning />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </OrderProvider>
    </div>
  );
}

export default App;
