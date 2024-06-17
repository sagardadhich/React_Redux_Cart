 import { useEffect, useState } from 'react';
import './App.css'
import HomePage from './comp/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SingleProduct from './comp/SingleProduct';
import NavbarToggles from './comp/Navbar';
import Cart from './comp/Cart';





function App() {


  const[value,setvalue]=useState([])

  useEffect(()=>{

      fetch('https://fakestoreapi.com/products').then((data)=>{
          return data.json()
        }).then((result)=>{
            console.log(result);
            setvalue(result)
        })

  },[])



  return (
    <>

    <BrowserRouter>
    <NavbarToggles/>
      <Routes>

        <Route path='/'  element={ <HomePage productData={value}/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
         <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>

    
   
    </>
  )
}

export default App
