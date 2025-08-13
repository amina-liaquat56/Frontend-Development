<Route exact path="/careers" element={
          <ProtectedRoute>
            <Careers></Careers>
          </ProtectedRoute>
        } />		
---------------------------------------------------
import React from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const role = "student";
  if (role === "student") {
      alert('you are not allowed to go to this route')
    return <Navigate to="/home" replace />;
  }
  return children;
}



Lazy Loading
============
const ProductList = React.lazy(() => import("./components/list/product_list"));

<Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
        <Route exact path="products" element={<ProductList />} />
    </Routes>
</Suspense>
