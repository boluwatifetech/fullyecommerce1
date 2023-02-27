import React from 'react';
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import {FaFacebook} from 'react-icons/fa'
import './main.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useStateValue} from './StateProvider'

const data=[{
  id:1,
  images:'images/cap1.jpeg',
  name:'cap',
  },
  {
  id:2,
  images:'images/cap2.jpeg',
  name:'cap',
  },
  {
  id:3,
  images:'images/cap3.jpeg',
  name:'cap',
  },
  {
  id:4,
  images:'images/cap4.jpeg',
  name:'cap',
  },
  {
  id:5,
  images:'images/cap5.jpeg',
  name:'cap',
  },
  {
  id:6,
  images:'images/cap6.jpeg',
  name:'cap',
  },
  {
  id:7,
  images:'images/cap7.jpeg',
  name:'cap',
  },
  {
  id:8,
  images:'images/cap8.jpeg',
  name:'cap',
  },
  {
  id:9,
  images:'images/cap9.jpeg',
  name:'cap',
  },
  {
  id:10,
  images:'images/cap10.jpeg',
  name:'cap',
  },
  {
  id:11,
  images:'images/cap11.jpeg',
  name:'cap',
  },
  {
  id:12,
  images:'images/cap12.jpeg',
  name:'cap',
  },
  {
  id:13,
  images:'images/cap13.jpeg',
  name:'cap',
  },
  {
  id:1,
  images:'images/cap14.jpeg',
  name:'cap',
  },
  {
  id:14,
  images:'images/cap15.jpeg',
  name:'cap',
  },
  
  {
  id:15,
  images:'images/cap17.jpeg',
  name:'cap',
  },
  {
  id:16,
  images:'images/cap18.jpeg',
  name:'cap',
  },
  {
  id:17,
  images:'images/cap19.jpeg',
  name:'cap',
  },
  {
  id:18,
  images:'images/cap20.jpeg',
  name:'cap',
  },
  {
  id:19,
  images:'images/cap21.jpeg',
  name:'cap',
  },
  {
  id:20,
  images:'images/cap22.jpeg',
  name:'cap',
  },
  {
  id:21,
  images:'images/cap23.jpeg',
  name:'cap',
  },
  {
  id:22,
  images:'images/cap24.jpeg',
  name:'cap',
  },
  {
  id:23,
  images:'images/cap25.jpeg',
  name:'cap',
  },
  {
  id:24,
  images:'images/cap26.jpeg',
  name:'cap',
  },
  {
  id:25,
  images:'images/cap27.jpeg',
  name:'cap',
  },
  {
  id:26,
  images:'images/cap28.jpeg',
  name:'cap',
  },
  {
  id:27,
  images:'images/cap29.jpeg',
  name:'cap',
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

function Cap() {

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

export default Cap;
