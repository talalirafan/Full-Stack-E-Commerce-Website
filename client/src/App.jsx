import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categorySlug" element={<Category />} />
          <Route path="/shop" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
