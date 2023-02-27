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
  images:'images/phone1.jpeg',
  name:'phone',
  },
  {
  id:2,
  images:'images/phone2.jpeg',
  name:'phone',
  },
  {
  id:3,
  images:'images/phone3.jpeg',
  name:'phone',
  },
  {
  id:4,
  images:'images/phone4.jpeg',
  name:'phone',
  },
  {
  id:5,
  images:'images/phone5.jpeg',
  name:'phone',
  },
  {
  id:6,
  images:'images/phone6.jpeg',
  name:'phone',
  },
{
  id:7,
  images:'images/phone7.jpeg',
  name:'phone',
  },
  {
  id:8,
  images:'images/phone8.jpeg',
  name:'phone',
  },
  {
  id:9,
  images:'images/phone9.jpeg',
  name:'phone',
  },
  {
  id:10,
  images:'images/phone10.jpeg',
  name:'phone',
  },
  {
  id:11,
  images:'images/phone11.jpeg',
  name:'phone',
  },
  {
  id:12,
  images:'images/phone12.jpeg',
  name:'phone',
  },
  {
  id:13,
  images:'images/phone13.jpeg',
  name:'phone',
  },
  {
  id:14,
  images:'images/phone14.jpeg',
  name:'phone',
  },
  {
  id:15,
  images:'images/phone15.jpeg',
  name:'phone',
  },
  {
  id:16,
  images:'images/phone16.jpeg',
  name:'phone',
  },
  {
  id:17,
  images:'images/phone17.jpeg',
  name:'phone',
  },
  {
  id:18,
  images:'images/phone18.jpeg',
  name:'phone',
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
function Phone() {
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
<Link to='store'><button >check store</button></Link>
          
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

export default Phone;
