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
  images:'images/shoe1.jpg',
  name:'shoe',
  },
  {
  id:2,
  images:'images/shoe2.jpg',
  name:'shoe',
  },
  {
  id:3,
  images:'images/shoe3.jpg',
  name:'shoe',
  },
  {
  id:4,
  images:'images/shoe4.jpg',
  name:'shoe',
  },
  {
  id:5,
  images:'images/shoe5.jpg',
  name:'shoe',
  },
  {
  id:6,
  images:'images/shoe6.jpg',
  name:'shoe',
  },
  {
  id:7,
  images:'images/shoe7.jpg',
  name:'shoe',
  },
  {
  id:8,
  images:'images/shoe8.jpg',
  name:'shoe',
  },
  {
  id:9,
  images:'images/shoe9.jpg',
  name:'shoe',
  },
  {
  id:10,
  images:'images/shoe10.jpg',
  name:'shoe',
  },
  {
  id:11,
  images:'images/shoe11.jpg',
  name:'shoe',
  },
  {
  id:12,
  images:'images/shoe12.jpg',
  name:'shoe',
  },
  {
  id:13,
  images:'images/shoe13.jpg',
  name:'shoe',
  },
  {
  id:14,
  images:'images/shoe14.jpeg',
  name:'shoe',
  },
  {
  id:15,
  images:'images/shoe15.jpeg',
  name:'shoe',
  },
  {
  id:16,
  images:'images/shoe16.jpeg',
  name:'shoe',
  },
  {
  id:17,
  images:'images/shoe17.jpeg',
  name:'shoe',
  },
  {
  id:18,
  images:'images/shoe18.jpeg',
  name:'shoe',
  },
  {
  id:19,
  images:'images/shoe19.jpeg',
  name:'shoe',
  },
  {
  id:20,
  images:'images/shoe20.jpeg',
  name:'shoe',
  },
  {
  id:21,
  images:'images/shoe21.jpeg',
  name:'shoe',
  },
  {
  id:22,
  images:'images/shoe22.jpeg',
  name:'shoe',
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


function Shoe() {

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

export default Shoe;
