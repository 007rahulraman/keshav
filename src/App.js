import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./views/product/ProductListPage";
import ProductInfoPage from "./views/product/ProductInfoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/">
      <Route index element={<ProductListPage />} />
        <Route  path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductInfoPage />}  />

      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
