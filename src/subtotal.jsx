import React from 'react';
import {useStateValue} from './StateProvider'
import './main.css'
import {getBasketTotal} from './reducer'
import {useHistory} from 'react-router-dom'
function Subtotal() {
  const history=useHistory()
   const [{basket},dispatch]=useStateValue()

  return (
    <div>
    <div className='price-place'>
        <h3>number of items:{basket?.length}</h3>
        <h2>price:$ {getBasketTotal(basket)}</h2>
        <button onClick={e=>history.push('/payment')}>proceed to checkout</button>
    </div>
    </div>
  );
}

export default Subtotal;
