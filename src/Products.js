import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, CardGroup, Button } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import {Col} from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    var raw = "";

    var requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };

    fetch("https://dummyjson.com/products", requestOptions)
      .then(response => response.json())
      .then(result => {
        setProducts(result.products)

        console.log(result)
      })
      .catch(error => console.log('error', error));
  }, []);

  if (!products) return <>Loading ....</>;

  return (
    <>
      <h4></h4>
<div>     
      <div className="container">

        <div className="row">

         
          {products.map((item, index) => {

            return (<>
              <div className="col-sm-3"> 
              <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={item.thumbnail}/>
                <Card.Body>
                  <Card.Title>
                    <p>{item.title}</p>
                  </Card.Title>
                  <Card.Text>
                  <p>${item.price}</p>
                  </Card.Text>
                  <a href="/prouctsdetail"> 
                  <Button variant="primary">Product Details</Button>
                  </a>
                </Card.Body>
              </Card>
              </div>
            </>
            )
          })
          }
        </div>
      </div>
      </div>
    </>



    
  );
};

export default Products;





