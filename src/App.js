import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {Home, About, Product, SingleProduct, CheckOut, PrivateRoute, Error, Cart, AuthWrapper} from './pages'

function App() {
  return (
    <>
    
    <Navbar />
      <Sidebar />
      
      <Routes>
   
   <Route index element={<Home />} />
   <Route path="about" element={<About />} />
     <Route path="products" element={<Product />} />
     <Route path="/products/:id" element={<SingleProduct />} />
     <Route path="checkout" element={
     <PrivateRoute>
      <CheckOut />
     </PrivateRoute>
     } />
     <Route path="cart" element={<Cart />} />
     <Route path="*" element={<Error />} />
  
  
 
</Routes>
     
<Footer />
    
    </>
   
  )
}

export default App
