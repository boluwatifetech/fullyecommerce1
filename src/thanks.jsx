import React from 'react';
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'
function Thanks() {
       const [{basket},dispatch]=useStateValue()
  return (
    <div>
      <div className='row'>
       <div className='congrats'>
        <h1><span>congratulations!!!</span> you have gotten yourself some quality products</h1>
    </div>
<div className='main-product'>
{
    basket.map((value)=>{
return(
    <div className='checkout-product' key={value.id}>
    <div className='images-checkout'>
        <img src={value.images}/>
        </div> 
        <div className='checkout-details'>
        <h3>{value.name}</h3>
        <p>high quality</p>
        <h2>${value.price}</h2>
         <input type='checkbox' checked/>
         <input type='checkbox' checked/>
         <input type='checkbox' checked/>
         <input type='checkbox' checked/>
        </div>
    </div>
)
    })
}
    </div>
     
      </div>
    </div>
  );
}

export default Thanks;
