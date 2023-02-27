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
  images:'images/tv1.jpeg',
  name:'television',

  },
  {
  id:2,
  images:'images/tv2.jpeg',
  name:'television',
  },
  {
  id:3,
  images:'images/tv3.jpeg',
  name:'television',
  },
  {
  id:4,
  images:'images/tv4.jpeg',
  name:'television',
  },

  {
  id:5,
  images:'images/tv5.jpeg',
  name:'television',
  },
  {
  id:6,
  images:'images/tv6.jpeg',
  name:'television',
  },
  {
  id:7,
  images:'images/tv7.jpeg',
  name:'television',
  },
  {
  id:8,
  images:'images/tv8.jpeg',
  name:'television',
  },
  {
  id:9,
  images:'images/tv9.jpeg',
  name:'television',
  },
  {
  id:10,
  images:'images/tv10.jpeg',
  name:'television',
  },
  {
  id:11,
  images:'images/tv11.jpeg',
  name:'television',
  },
  {
  id:12,
  images:'images/tv12.jpeg',
  name:'television',
  },
  {
  id:13,
  images:'images/tv13.jpeg',
  name:'television',
  },
{
  id:14,
  images:'images/tv14.jpeg',
  name:'television',
  },
  
  {
  id:15,
  images:'images/tv16.webp',
  name:'television',
  },
  {
  id:16,
  images:'images/tv17.webp',
  name:'television',
  },
  {
  id:17,
  images:'images/tv18.webp',
  name:'television',
  },
  {
  id:18,
  images:'images/tv19.webp',
  name:'television',
  },
  {
  id:19,
  images:'images/tv20.webp',
  name:'television',
  },
  {
  id:20,
  images:'images/tv21.webp',
  name:'television',
  },
  {
  id:21,
  images:'images/tv22.webp',
  name:'television',
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

function Tv() {
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
        <div className='camp-store'>
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

export default Tv;

