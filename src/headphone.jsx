import React from 'react';
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import {FaFacebook} from 'react-icons/fa'
import './main.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useStateValue} from './StateProvider'
const data=[
    {
  id:1,
  images:'images/head1.jpeg',
  name:'headphone',
  },
  {
  id:2,
  images:'images/head2.jpeg',
  name:'headphone',
  },
  {
  id:3,
  images:'images/head3.jpeg',
  name:'headphone',
  },
  {
  id:4,
  images:'images/head4.jpeg',
  name:'headphone',
  },
  {
  id:5,
  images:'images/head5.jpeg',
  name:'headphone',
  },
  {
  id:6,
  images:'images/head6.jpeg',
  name:'headphone',
  },
  {
  id:7,
  images:'images/head7.jpeg',
  name:'headphone',
  },
  {
  id:8,
  images:'images/head8.jpeg',
  name:'headphone',
  },
  {
  id:9,
  images:'images/head9.jpeg',
  name:'headphone',
  },
  {
  id:10,
  images:'images/head10.jpeg',
  name:'headphone',
  },
  
  {
  id:11,
  images:'images/head13.jpeg',
  name:'headphone',
  },
  {
  id:12,
  images:'images/head14.jpeg',
  name:'headphone',
  },
  {
  id:13,
  images:'images/head14.webp',
  name:'headphone',
  },
  {
  id:14,
  images:'images/head15.jpeg',
  name:'headphone',
  },
  {
  id:15,
  images:'images/head15.webp',
  name:'headphone',
  },
  {
  id:16,
  images:'images/head16.jpeg',
  name:'headphone',
  },
  {
  id:17,
  images:'images/head16.webp',
  name:'headphone',
  },
  {
  id:18,
  images:'images/head17.jpeg',
  name:'headphone',
  },
  {
  id:19,
  images:'images/head18.jpeg',
  name:'headphone',
  },
  {
  id:20,
  images:'images/head20.webp',
  name:'headphone',
  },
  {
  id:21,
  images:'images/head21.webp',
  name:'headphone',
  },
  {
  id:22,
  images:'images/head22.webp',
  name:'headphone',
  },
  {
  id:23,
  images:'images/head23.webp',
  name:'headphone',
  },
  {
  id:24,
  images:'images/head24.webp',
  name:'headphone',
  },
{
  id:25,
  images:'images/head25.webp',
  name:'headphone',
  },
  {
  id:26,
  images:'images/head26.webp',
  name:'headphone',
  },
  {
  id:27,
  images:'images/head27.webp',
  name:'headphone',
  },
  {
  id:28,
  images:'images/head28.webp',
  name:'headphone',
  },
]
const date=[{
  id:1,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/wrist5.jpeg',
  desc:'Well designed wristwatches are available base on price and they are all of quality products which are delivered as ordered'
},
{
  id:2,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/head1.jpeg',
  desc:'Quality and well customized headphone are available base on price and they are all of quality products which are delivered as ordered'
},
{
  id:3,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/shoe3.jpg',
  desc:'Quality shoes are available base on price and they are all of quality products which are delivered as ordered'
},
{
  id:4,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/phone4.jpeg',
  desc:'Quality phones are available base on price and they are all of quality products which are delivered as ordered'
},
]
function Head() {
  const [state,dispatch]=useStateValue()
const addToBasket=(value)=>{
  dispatch({
      type:'ADDTOBASKET',
      item:
value
      
  }
  )
}
  
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      appendDots:(dots)=>{
        return <ul style={{margin:'0px'}}>{dots}</ul>
      },
    }
  return (
    <div>
    <div className='row'>
     <div className='home-container'>
      <Slider {...settings}>
   {
    date.map((value,index)=>{
      return(
        <div className='displayflexhome' key={index}>
        <div className='title'>
          <h2>{value.title}</h2>
          <p>{value.desc}</p>
            <button><Link to='/store'></Link>order now</button>
          </div>
          <div className='images-container'>
          <img src={value.images}/>
        
          </div>
  
        </div>
      )
    })
   }
   </Slider>
   </div>
      <div className='main-storeflex'>
       
        <div className='main-store'>

<div className='grid-store'>
  {
    data.map((value)=>{
      return(
        <div className='camp-store' key={value.id}>
          <div className='images-store'>
            <img src={value.images}/>
            </div>
            <h3>{value.name}</h3>
<small>high quality</small>
<ReactStars count={5} size={16}
 activeColor='red' 
value={5} edit={false}/>
<button onClick={()=>addToBasket(value)}>add to cart</button>
          
        </div>
      )
    })
  }
</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Head;
