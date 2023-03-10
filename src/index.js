import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductsDetail } from './ProductsDetail';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import { Checkout } from './Checkout';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Products/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



const router = createBrowserRouter([
  {
    path: "/productsdetail/:productId",
    element: (
        <>
          <ProductsDetail></ProductsDetail>
          {/* <Link to="/productsdetail/:productId"></Link> */}
        </>
    )
  },
  {
    path: "/",
    element: (
        <>
        <Products></Products>
          <Link to="/"></Link>
        </>
    )
  },
  {
    path: "/checkout/:checkoutId",
    element: (
        <>
          <Checkout></Checkout>
          <Link to="/checkout/:checkoutId"></Link>
        </>
    )
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
