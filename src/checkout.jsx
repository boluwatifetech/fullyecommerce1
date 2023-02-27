import React from 'react';
import Subtotal from './subtotal'
import {useStateValue} from './StateProvider'

function Checkout() {
       const [{basket},dispatch]=useStateValue()

       const removeCart=(id)=>{
        dispatch({
            type:'REMOVEITEM',
basket:id
        })
       }
  return (
    <div>
  
      <div className='row'>
     
       <div className='container-checkout'>
           <div className='price'>
           <Subtotal/>
        </div>
        <div className='main-product'>
{
    basket.map((value)=>{
return(
    <div className='checkout-product' >
    <div className='images-checkout'>
        <img src={value.images}/>
        </div>
        <div className='checkout-details'>
        <h3>{value.name}</h3>
        <p>high quality</p>
        <h2>${value.price}</h2>
        <button onClick={removeCart}>remove cart</button>
        </div>
    </div>
)
    })
}
        </div>
       
       </div>
      </div>
    </div>
  );
}

export default Checkout;
