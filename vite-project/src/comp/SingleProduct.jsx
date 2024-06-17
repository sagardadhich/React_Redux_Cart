import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBCard,
   MDBCardBody,
   MDBCardImage,
   MDBIcon,
   MDBBtn,
   MDBRipple,
 } from "mdb-react-ui-kit";
 
 

function SingleProduct() {

   const[singleproduct,setsingleproduct]=useState([])
   
   const params=useParams()
   console.log(params);
   
   useEffect(()=>{

      fetch(`https://fakestoreapi.com/products/${params.id}`).then((data)=>{
          return data.json()
        }).then((result)=>{
            console.log(result);
            setsingleproduct(result)
        })

  })



    return ( 
      
         <MDBContainer fluid className="my-5">
           <MDBRow className="justify-content-center">
             <MDBCol md="8" lg="6" xl="4">
               <MDBCard style={{ borderRadius: "15px" }}>
                 <MDBRipple
                   rippleColor="light"
                   rippleTag="div"
                   className="bg-image rounded hover-overlay"
                 >
                   <MDBCardImage
                     src={singleproduct.image}
                     fluid
                     className="w-80 "
                     style={{
                       borderTopLeftRadius: "15px",
                       borderTopRightRadius: "15px",
                     }}
                   />
                   <a href="#!">
                     <div className="mask"></div>
                   </a>
                 </MDBRipple>
                 <MDBCardBody className="pb-0">
                   <div className="d-flex justify-content-between">
                     <div>
                       <p>
                         <a href="#!" className="text-dark">
                           {singleproduct.title}
                         </a>
                       </p>
                       <p className="small text-muted">Products</p>
                     </div>
                     <div>
                       <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                         <MDBIcon fas icon="star" />
                         <MDBIcon fas icon="star" />
                         <MDBIcon fas icon="star" />
                         <MDBIcon fas icon="star" />
                       </div>
                       <p className="small text-muted">Rated :-{singleproduct.rating && singleproduct.rating.rate}</p>
                     </div>
                   </div>
                 </MDBCardBody>
                 <hr class="my-0" />
                 <MDBCardBody className="pb-0">
                   <div className="d-flex justify-content-between">
                     <p>
                       <a href="#!" className="text-dark" >
                        Price:- ${singleproduct.price}
                       </a>
                     </p>
                    
                   </div>
                   <p className="small text-muted">VISA Platinum</p>
                 </MDBCardBody>
                 <hr class="my-0" />
                 <MDBCardBody className="pb-0">
                   <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                     <a href="#!" className="text-dark fw-bold">
                        <MDBBtn color="danger">
                        Cancel
                        </MDBBtn>
                       
                     </a>
                     <MDBBtn color="success">
                        ADD TO CART
                     </MDBBtn>
                     <MDBBtn color="primary">Buy now</MDBBtn>
                   </div>
                 </MDBCardBody>
               </MDBCard>
             </MDBCol>
           </MDBRow>
         </MDBContainer> 
     )
}

export default SingleProduct;