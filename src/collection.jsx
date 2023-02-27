import React from 'react';
import Reactstars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'

const data=[{
    id:1,
    images:'images/shoe5.jpg',
    name:'italian shoe',
    price:100,
},
{
    id:2,
    images:'images/shoe6.jpg',
    name:'croset shoe',
    price:80,
},
{
    id:3,
    images:'images/phone5.jpeg',
    name:'iphone 12',
    price:90,
},
{
    id:4,
    images:'images/head24.webp',
    name:' headphone',
    price:50,
},
{
    id:5,
    images:'images/head28.webp',
    name:' headphone',
    price:70,
},
{
    id:6,
    images:'images/tv1.jpeg',
    name:'samsong tv',
    price:700,
},

]
function Collection() {
  return (
    <div>
    
    <div className='camp-collections'>
    
      {
        data.map((value)=>{
            return(
                <div key={value.id} className='collection-flex'>
<div className='collection-img'>
<img src={value.images}/>
</div>
<div className='collection-details'>
<h3>{value.name}</h3>
<Reactstars count={5} size={14} activeColor='red' value='4' edit={false}/>
<p>${value.price}</p>
<Link to='/store'>
    <button>buy now</button>
    
</Link>
<div className='collection-fa'>
<Link to='/store' ><FaFacebook className='collect-fa'/></Link>
<Link to='/store'><FaTwitter className='collect-fa'/></Link>
<Link to='/store'><FaInstagram className='collect-fa'/></Link>
</div>
</div>
           </div>
            )
        })
      }
    </div>
    </div>
  );
}

export default Collection;
