import React from 'react';
import {Link} from 'react-router-dom'
import './main.css'
const data=[{
  id:1,
    images:'/images/head9.jpeg',
        words:'It is of high standard and quality headphone',
  name:'headphone',
  price:800,
},
{
  id:2,
  images:'/images/head25.webp',
      words:'Quality and sounding earpod',
  name:'earpod',
  price:2000,
},

{
  id:3,
    images:'/images/head16.jpeg',
        words:'Full package earpiece with quality sound',
  name:'headphone',
  price:1000,
},
{
  id:4,
    images:'/images/shoe4.jpg',
        words:'Well designed and highly customize shoe',
  name:'shoe',
  price:1200,
},
{
  id:5,
  images:'/images/phone2.jpeg',
      words:'with highly qaulity and good camera',
  name:'iphone',
  price:3000,
},
{
  id:6,
    images:'/images/wrist6.jpeg',
    words:'highly customized golden wristwatch',
  name:'wristwatch',
  price:100,
},
]
function Favour() {
  return (
    <div>
    
    
    <div className='favourite-container'>
      {
        data.map((value)=>{
          return(
    <div key={value.id} className='inner-favourite'>
    <div className='inner-img'>
<img src={value.images}/>
</div>
<div className='favourite-content'>
<h4>{value.name}</h4>
<p>{value.words}</p>
<p>${value.price}</p>
<Link to='/store'><button>view more</button></Link>
<img src='images/love.png' className='love'/>
</div>
            </div>
          )
        })
      }
    </div>
    
    </div>
  );
}

export default Favour;
