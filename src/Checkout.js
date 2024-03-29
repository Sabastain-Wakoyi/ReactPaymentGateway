import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBCheckbox,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
  } from "mdb-react-ui-kit";
  
import React from "react";
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




    if (!products) return <>Loading ....</>;
  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Biling Details
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow className="mb-4">
                      <MDBCol>
                        <MDBInput label="First name" id="form1" type="text" />
                      </MDBCol>

                      <MDBCol>
                        <MDBInput label="Last name" id="form2" type="text" />
                      </MDBCol>
                    </MDBRow>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Address"
                      id="form3"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form4"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Phone"
                      id="form5"
                      type="number"
                    />
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="checkoutForm2"
                      label=" Save this information for next time"
                      defaultChecked
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Shipping Medtod
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Standard"
                  wrapperClass="mb-4"
                />
                <span style={{ float: "right" }}>$0.00</span>
                <div style={{ marginLeft: "20px" }}>4-10 business days</div>
                <br />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Express Shipping"
                  wrapperClass="mb-4"
                />
                <span style={{ marginLeft: "20px" }}>3-6 business days</span>
                <span style={{ float: "right" }}>$19.95</span>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Payment
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <div>
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
                <br />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Credit card"
                  checked
                />

                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Debit card"
                />

                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  label="Paypal"
                  wrapperClass="mb-4"
                />

                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      label="Name on card"
                      id="form6"
                      type="text"
                      wrapperClass="mb-4"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Credit Card Number"
                      id="form7"
                      type="text"
                      wrapperClass="mb-4"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md="3">
                    <MDBInput
                      label="Expiration"
                      id="form8"
                      type="text"
                      wrapperClass="mb-4"
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      label="CVV"
                      id="form8"
                      type="text"
                      wrapperClass="mb-4"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    {products.title}
                    <span>${products.price}.99</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>Free</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Discount
                    <span>{products.discountPercentage}%</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including Tax)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>
                        $
                        {parseInt(products.price) +
                          0.99 -
                          (products.discountPercentage / 100) * products.price}
                      </strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
                <MDBBtn size="lg" block>
                  Continue to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

//     if(!products) return<>Loading ...</>;
//     return(

//       <section className="h-100 gradient-custom">
//   <MDBContainer className="py-5 h-100">
//     <MDBRow className="justify-content-center my-4">
//       <MDBCol md="8">
//         <MDBCard className="mb-4">
//           <MDBCardHeader className="py-3">
//             <MDBTypography tag="h5" className="mb-0">
//               Cart - 2 items
//             </MDBTypography>
//           </MDBCardHeader>
//           <MDBCardBody>
//             <MDBRow>
//               <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
//                 <MDBRipple rippleTag="div" rippleColor="light"
//                   className="bg-image rounded hover-zoom hover-overlay">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
//                     className="w-100" />
//                   <a href="#!">
//                     <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
//                     </div>
//                   </a>
//                 </MDBRipple>
//               </MDBCol>

//               <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
//                 <p>
//                   <strong>Blue denim shirt</strong>
//                 </p>
//                 <p>Color: blue</p>
//                 <p>Size: M</p>

//                 <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
//                   title="Remove item">
//                   <MDBIcon fas icon="trash" />
//                 </MDBTooltip>

//                 <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
//                   title="Move to the wish list">
//                   <MDBIcon fas icon="heart" />
//                 </MDBTooltip>
//               </MDBCol>
//               <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
//                 <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
//                   <MDBBtn className="px-3 me-2">
//                     <MDBIcon fas icon="minus" />
//                   </MDBBtn>

//                   <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

//                   <MDBBtn className="px-3 ms-2">
//                     <MDBIcon fas icon="plus" />
//                   </MDBBtn>
//                 </div>

//                 <p className="text-start text-md-center">
//                   <strong>$17.99</strong>
//                 </p>
//               </MDBCol>
//             </MDBRow>

//             <hr className="my-4" />

//             <MDBRow>
//               <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
//                 <MDBRipple rippleTag="div" rippleColor="light"
//                   className="bg-image rounded hover-zoom hover-overlay">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
//                     className="w-100" />
//                   <a href="#!">
//                     <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
//                     </div>
//                   </a>
//                 </MDBRipple>
//               </MDBCol>

//               <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
//                 <p>
//                   <strong>Red hoodie</strong>
//                 </p>
//                 <p>Color: red</p>
//                 <p>Size: M</p>

//                 <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
//                   title="Remove item">
//                   <MDBIcon fas icon="trash" />
//                 </MDBTooltip>

//                 <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
//                   title="Move to the wish list">
//                   <MDBIcon fas icon="heart" />
//                 </MDBTooltip>
//               </MDBCol>
//               <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
//                 <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
//                   <MDBBtn className="px-3 me-2">
//                     <MDBIcon fas icon="minus" />
//                   </MDBBtn>

//                   <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

//                   <MDBBtn className="px-3 ms-2">
//                     <MDBIcon fas icon="plus" />
//                   </MDBBtn>
//                 </div>

//                 <p className="text-start text-md-center">
//                   <strong>$17.99</strong>
//                 </p>
//               </MDBCol>
//             </MDBRow>
//           </MDBCardBody>
//         </MDBCard>

//         <MDBCard className="mb-4">
//           <MDBCardBody>
//             <p>
//               <strong>Expected shipping delivery</strong>
//             </p>
//             <p className="mb-0">12.10.2020 - 14.10.2020</p>
//           </MDBCardBody>
//         </MDBCard>

//         <MDBCard className="mb-4 mb-lg-0">
//           <MDBCardBody>
//             <p>
//               <strong>We accept</strong>
//             </p>
//             <MDBCardImage className="me-2" width="45px"
//               src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
//               alt="Visa" />
//             <MDBCardImage className="me-2" width="45px"
//               src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
//               alt="American Express" />
//             <MDBCardImage className="me-2" width="45px"
//               src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
//               alt="Mastercard" />
//             <MDBCardImage className="me-2" width="45px"
//               src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
//               alt="PayPal acceptance mark" />
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol md="4">
//         <MDBCard className="mb-4">
//           <MDBCardHeader>
//             <MDBTypography tag="h5" className="mb-0">
//               Summary
//             </MDBTypography>
//           </MDBCardHeader>
//           <MDBCardBody>
//             <MDBListGroup flush>
//               <MDBListGroupItem
//                 className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                 Products
//                 <span>$53.98</span>
//               </MDBListGroupItem>
//               <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
//                 Shipping
//                 <span>Gratis</span>
//               </MDBListGroupItem>
//               <MDBListGroupItem
//                 className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                 <div>
//                   <strong>Total amount</strong>
//                   <strong>
//                     <p className="mb-0">(including VAT)</p>
//                   </strong>
//                 </div>
//                 <span>
//                   <strong>$53.98</strong>
//                 </span>
//               </MDBListGroupItem>
//             </MDBListGroup>

//             <MDBBtn block size="lg">
//               Go to checkout
//             </MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   </MDBContainer>
// </section>



//     )

    
// }



