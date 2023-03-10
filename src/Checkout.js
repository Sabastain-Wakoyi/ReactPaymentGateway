import { useEffect, useState } from "react";

export const Checkout = () => {
    let urlParams = window.location.pathname.split("/");
    const [products, setProducts] = useState({});


    useEffect(() =>{

        var raw = "";

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("https://dummyjson.com/products", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    })
}