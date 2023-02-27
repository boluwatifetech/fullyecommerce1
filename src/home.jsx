import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shortimg from './shortimg'
import Collection from './collection'
import Expensive from './expensive'
import Blogger from './blogger'
import Marquee from 'react-fast-marquee'
import Favour from './favour'
import './main.css'
import {Link} from 'react-router-dom'
const data=[{
  id:1,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/wrist5.jpeg',
  desc:'Well designed wristwatches are available base on their prices tag and they are all of quality products which are delivered immidiately after  being ordered'
},
{
  id:2,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/head1.jpeg',
  desc:'Quality and well customized with good sound headphone are available base on price and they are all of quality products which are delivered as ordered'
},
{
  id:3,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/shoe3.jpg',
  desc:'Quality shoes with fantastic designs are available base on price and they are all of quality products which are delivered as ordered'
},
{
  id:4,
  title:'you get yourself a 20% discount on your first patronage',
  images:'images/phone4.jpeg',
  desc:'Quality phones with good camera are available base on price and they are all of quality products which are delivered as ordered'
},
]
function Home() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      appendDots:(dots)=>{
        return <ul style={{margin:'0px'}}>{dots}</ul>
      },
    };
  return (
    <div className='main-home'>
    <div className='row'>
    <div className='home-container'>
      <Slider {...settings}>
   {
    data.map((value,index)=>{
      return(
        <div className='displayflexhome' key={index}>
        <div className='title'>
          <h2>{value.title}</h2>
          <p>{value.desc}</p>
            <Link to='/store'><button>order now</button></Link>
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
    <div className='home-content'>
<Shortimg/>
    </div>
    <div className='favourite'>
<h2>our collections</h2>
<Collection/>
    </div>
    <Marquee className='marquee'>
  <div className='marquee-img'>
<img src='images/cartlogo.png'/>
</div>
<div className='marquee-img'>
<img src='images/logoproduct.jpeg'/>
</div>
<img src='images/logosamsong.jpeg'/>
<img src='images/logosony.jpeg'/>
<img src='images/logomark.png'/>
      
    </Marquee>
    <div className='favourite'>
    <h2>most expensive products</h2>
      <Expensive/>
    </div>
    <div className='favourite'>
      <h2>our blogs</h2>
    <Blogger/>
    </div>
   <div className='favourite'>
   <h2>favourite products</h2>
      <Favour/>
    </div>
 </div>
    </div>
  );
}

export default Home;

