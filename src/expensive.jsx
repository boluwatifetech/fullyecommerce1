import React from 'react'
import Reactstars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'

const data=[{
    id:1,
    images:'images/tv3.jpeg',
    name:'sonified tv',
    price:2000,
},
{
    id:2,
    images:'images/wrist4.jpeg',
    name:'carbana wats',
    price:1500,
},
{
    id:3,
    images:'images/phone8.jpeg',
    name:'samsong s22',
    price:1000,
},
{
    id:4,
    images:'images/shoe1.jpg',
    name:'faks shoe',
    price:905,
},
{
    id:5,
    images:'images/head6.jpeg',
    name:'kalsiano',
    price:899,
},
{
    id:6,
    images:'images/tv5.jpeg',
    name:'samsong tv',
    price:850,
},

]
function Expensive() {
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

export default Expensive;