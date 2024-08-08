
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Swal from 'sweetalert2';

import Header from './Components/Header/Header'
import Carts from './Components/Cart/Carts'

function App() {

const [carts,setCarts]=useState([]);

const handleAddToCart = (card)=>{
  const {id}=card;
  const isExist = carts.find(cart => cart.id === id)
  if(isExist){
    Swal.fire("Alrady Exist !");
  }
  else{
    const newCarts = [...carts,card]
    setCarts(newCarts)
  }
  // console.log("kklll")
  // console.log(card)
 
  
}

const handleRemoveFromCart =(cart)=>{
  console.log('remove')
  const {id}=cart;
  console.log(cart)
  const affterRemove = carts.filter(cart => cart.id !== id )
  setCarts(affterRemove)

}

  return (
    <>
     
   <div className='max-w-screen-2xl mx-auto'>
   <Header></Header>

<div className='md:flex gap-10 md:gap-20 justify-between my-12'>
<Cards handleAddToCart={handleAddToCart}></Cards>
<Carts handleRemoveFromCart={handleRemoveFromCart} carts={carts}></Carts>
</div>  

   </div>
      
     
    </>
  )
}

export default App
