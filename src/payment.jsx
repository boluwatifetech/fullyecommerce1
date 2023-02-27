import React from 'react';
import './main.css'
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'
import {getBasketTotal} from './reducer'


function Payment() {
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
    <div className='container-payment'>
<div className='payment-address'>
<h1>delivery address:</h1>
<p>akungba akoko</p>
<h3>lane 2</h3>
<h4>merciful villa</h4>
</div>

<div className='review-items'>
    <h2>review items:</h2>
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
         <button onClick={removeCart}>remove cart</button>
        </div>
    </div>
)
    })
}
    </div>
<div className='payment-stripe'>
<h3>payment method</h3>
<div className='text-payment'>

</div>
<div className='price-container'>
    <h2>price:$ {getBasketTotal(basket)}</h2>
  <Link to='/thanks'><button>buy now
</button></Link>  
</div>


</div>
    </div>
      </div>
    </div>
  );
}

export default Payment;
