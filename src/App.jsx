import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Orders from "./Pages/Orders";
import PlaceOrders from "./Pages/PlaceOrders";
import Product from "./Pages/Product";
import Auth from "./Pages/Auth";
import SearchBar from "./Components/SearchBar";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPaths: true }}>
      <div className="app px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/placeorders" element={<PlaceOrders />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/*" element={<NotFound />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
