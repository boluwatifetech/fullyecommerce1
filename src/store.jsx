import React from 'react';
import {Link} from 'react-router-dom'
import {FaShoePrints,FaFacebook} from 'react-icons/fa'
import ReactStars from 'react-rating-stars-component'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './main.css'
import {useStateValue} from './StateProvider'

export const data=[{
  id:1,
  images:'images/cap1.jpeg',
  name:'cap',
  price:400,
  },
  {
  id:2,
  images:'images/head5.jpeg',
  name:'headphone',
   price:200,
  },
  {
  id:3,
  images:'images/cap2.jpeg',
  name:'cap',
   price:203,
  },
  {
  id:4,
  images:'images/cap3.jpeg',
  name:'cap',
  price:908,
  },
  {
  id:5,
  images:'images/phone1.jpeg',
  name:'phone',
  price:278,
  },
  {
  id:6,
  images:'images/cap4.jpeg',
  name:'cap',
  price:431,
  },
  {
  id:7,
  images:'/images/shoe7.jpg',
  name:'shoe',
  price:1000,
  },
  {
  id:8,
  images:'images/tv18.webp',
  name:'television',
  price:799,
  },
  {
  id:9,
  images:'images/cap5.jpeg',
  name:'cap',
  price:365,
  },
  {
  id:10,
  images:'images/cap6.jpeg',
  name:'cap',
  price:70,
  },
  {
    id:11,
      price:120,
  
  images:'images/phone8.jpeg',
  name:'phone',
  
  },
  {
  id:12,
  images:'images/cap7.jpeg',
  name:'cap',
  price:689,
  },
  {
  id:13,
  images:'images/cap8.jpeg',
  name:'cap',
  price:288,
  },
  {
  id:14,
  images:'images/phone10.jpeg',
  name:'phone',
  price:903,
  },
  {
  id:15,
  price:125,
  images:'images/cap9.jpeg',
  name:'cap',
  },
  
  {
  id:16,
  images:'images/cap11.jpeg',
  name:'cap',
  price:170,
  },
  {
  id:17,
  images:'images/cap12.jpeg',
  name:'cap',
  price:270,
  },
  {
  id:18,
  images:'images/head17.jpeg',
  name:'headphone',
  price:170,
  },
  {
  id:19,
  images:'images/cap13.jpeg',
  name:'cap',
  price:153,
  },
  
  {
  id:20,
  images:'images/cap15.jpeg',
  name:'cap',
  price:100,
  },
  {
  id:21,
  images:'images/wrist3.jpeg',
  name:'wristwatch',
  price:1200,
  },
   {
  id:22,
  images:'images/head28.webp',
  name:'headphone',
  price:2509,
  },
  {
  id:23,
  images:'images/cap17.jpeg',
  name:'cap',
  price:271,
  },
  {
  id:24,
  images:'images/cap18.jpeg',
  name:'cap',
  price:380,
  },
    {
  id:25,
  images:'images/wrist6.jpeg',
  name:'wristwatch',
  price:1709,
  },
  {
  id:26,
  images:'images/head14.jpeg',
  name:'headphone',
  price:2543,
  },
  {
  id:27,
  images:'images/cap19.jpeg',
  name:'cap',
  price:287,
  },
   {
  id:28,
  images:'images/phone17.jpeg',
  name:'phone',
  price:1390,
  },
  {
  id:29,
  images:'images/wrist14.webp',
  name:'wristwatch',
  price:983,
  },
  
  {
  id:30,
  images:'images/cap20.jpeg',
  name:'cap',
  price:127,
  },
  {
  id:31,
  images:'images/cap21.jpeg',
  name:'cap',
  price:900,
  },
  {
  id:32,
  images:'images/head10.jpeg',
  name:'headphone',
  price:234,
  },
  {
  id:33,
  images:'images/cap23.jpeg',
  name:'cap',
  price:164,
  },
  {
  id:34,
  images:'images/cap24.jpeg',
  name:'cap',
  price:202,
  },
  
  {
  id:35,
  images:'images/head3.jpeg',
  name:'headphone',
  price:236,
  },
  {
  id:36,
  images:'images/cap25.jpeg',
  name:'cap',
  price:139,
  },
   {
  id:37,
  images:'images/shoe4.jpg',
  name:'shoe',
  price:1270,
  },
    {
  id:38,
  images:'images/head15.jpeg',
  name:'headphone',
  price:1365,
  },
  {
  id:39,
  images:'images/cap26.jpeg',
  name:'cap',
  price:800,
  },
  {
  id:40,
  images:'images/cap27.jpeg',
  name:'cap',
  price:169,
  },
   {
  id:41,
  images:'images/shoe9.jpg',
  name:'shoe',
  price:167,
  },
  {
  id:42,
  images:'images/phone4.jpeg',
  name:'phone',
  price:20,
  },
  {
  id:43,
  images:'images/cap28.jpeg',
  name:'cap',
  price:20,
  },
   {
  id:44,
  images:'images/tv9.jpeg',
  name:'television',
  price:907,
  },
  {
  id:45,
  images:'images/head18.jpeg',
  name:'headphone',
  price:147,
  },
  {
  id:46,
  images:'images/cap29.jpeg',
  name:'cap',
  price:367,
  },
  {
  id:47,
  images:'images/head1.jpeg',
  name:'headphone',
  price:476,
  },
  {
  id:48,
  images:'images/head2.jpeg',
  name:'headphone',
  price:908,
  },
   {
  id:49,
  images:'images/tv4.jpeg',
  name:'television',
  price:356,
  },

   {
  id:50,
  images:'images/cap22.jpeg',
  name:'cap',
  price:577,
  },
  {
  id:51,
  images:'images/head4.jpeg',
  name:'headphone',
  price:345,
  },
  
 
  {
  id:52,
  images:'images/head7.jpeg',
  name:'headphone',
  price:987,
  },
 
  {
  id:53,
  images:'images/head9.jpeg',
  name:'headphone',
  price:123,
  },
 
  
  {
  id:54,
  images:'images/head13.jpeg',
  name:'headphone',
  price:86,
  },
  {
  id:55,
  images:'images/cap14.jpeg',
  name:'cap',
  price:899,
  },
  
  {
  id:56,
  images:'images/head14.webp',
  name:'headphone',
  price:1266,
  },

  {
  id:57,
  images:'images/head15.webp',
  name:'headphone',
  price:900,
  },
  {
  id:58,
  images:'images/head16.jpeg',
  name:'headphone',
  price:577,
  },
    {
  id:59,
  images:'images/phone13.jpeg',
  name:'phone',
  price:70,
  },
 
  {
  id:60,
  images:'images/head16.webp',
  name:'headphone',
  price:122,
  },
  
  
 {
  id:61,
  images:'images/tv20.webp',
  name:'television',
  price:234,
  },
  {
  id:62,
  images:'images/head21.webp',
  name:'headphone',
  price:234,
  },
  {
  id:63,
  images:'images/wrist4.jpeg',
  name:'wristwatch',
  price:2334,
  },
  {
  id:64,
  images:'images/head22.webp',
  name:'headphone',
  price:123,
  },
  {
  id:65,
  images:'images/head23.webp',
  name:'headphone',
  price:345,
  },
   {
  id:66,
  images:'images/phone14.jpeg',
  name:'phone',
  price:566,
  },
  {
  id:67,
  images:'images/head24.webp',
  name:'headphone',
  price:378,
  },
{
  id:68,
  images:'images/head25.webp',
  name:'headphone',
  price:899,
  },
  {id:69,
  images:'images/phone9.jpeg',
  name:'phone',
  price:240,
  },
  {
  id:70,
  images:'images/tv13.jpeg',
  name:'television',
  price:1200,
  },
  {
  id:71,
  images:'images/head26.webp',
  name:'headphone',
  price:2000,
  },
  {
  id:72,
  images:'images/head27.webp',
  name:'headphone',
  price:677,
  },
  {
  id:73,
  images:'images/shoe18.jpeg',
  name:'shoe',
  price:208,
  },

  {
  id:74,
  images:'images/phone2.jpeg',
  name:'phone',
  price:466,
  },
  {
  id:75,
  images:'images/phone3.jpeg',
  name:'phone',
  price:2045,
  },
  
  
  {
  id:76,
  images:'images/phone6.jpeg',
  name:'phone',
  price:2230,
  },
   {
  id:78,
  images:'images/head20.webp',
  name:'headphone',
  price:320,
  },
{
  id:79,
  images:'images/phone7.jpeg',
  name:'phone',
  price:2560,
  },

  
  {
  id:80,
  images:'images/phone11.jpeg',
  name:'phone',
  price:2034,
  },
   {
  id:81,
  images:'images/head6.jpeg',
  name:'headphone',
  price:2440,
  },
  {
  id:82,
  images:'images/phone12.jpeg',
  name:'phone',
  price:204,
  },

  {
  id:83,
  images:'images/phone15.jpeg',
  name:'phone',
  price:280,
  },
  {
  id:84,
  images:'images/phone16.jpeg',
  name:'phone',
  price:2000,
  },
 
  {
  id:85,
  images:'images/phone18.jpeg',
  name:'phone',
  price:2044,
  },
  {
  id:86,
  images:'images/shoe1.jpg',
  name:'shoe',
  price:2340,
  },
  {
  id:87,
  images:'images/shoe2.jpg',
  name:'shoe',
  price:2034,
  },
  {
  id:88,
  images:'images/shoe3.jpg',
  name:'shoe',
  price:20,
  },
 
  {
  id:89,
  images:'images/shoe5.jpg',
  name:'shoe',
  price:20,
  },
   {
  id:90,
  images:'images/head8.jpeg',
  name:'headphone',
  price:2089,
  },
  {
  id:91,
  images:'images/phone5.jpeg',
  name:'phone',
  price:2045,
  },
  {
  id:92,
  images:'images/shoe6.jpg',
  name:'shoe',
  price:2087,
  },
  
  {
  id:93,
  images:'images/shoe8.jpg',
  name:'shoe',
  price:2034,
  },
 
  {
  id:94,
  images:'images/shoe10.jpg',
  name:'shoe',
  price:2340,
  },
  {
  id:95,
  images:'images/shoe11.jpg',
  name:'shoe',
  price:2011,
  },
  {
  id:96,
  images:'images/shoe12.jpg',
  name:'shoe',
  price:2034,
  },
  {
  id:97,
  images:'images/shoe13.jpg',
  name:'shoe',
  price:2000,
  },
  {
  id:98,
  images:'images/shoe14.jpeg',
  name:'shoe',
  price:2340,
  },
  {
  id:99,
  images:'images/shoe15.jpeg',
  name:'shoe',
  price:20,
  },
  {
  id:100,
  images:'images/shoe16.jpeg',
  name:'shoe',
  price:2090,
  },
  {
  id:101,
  images:'images/shoe17.jpeg',
  name:'shoe',
  price:2012,
  },
 
  {
  id:102,
  images:'images/shoe19.jpeg',
  name:'shoe',
  price:2000,
  },
  
  {
  id:103,
  images:'images/shoe21.jpeg',
  name:'shoe',
  price:267,
  },
  {
  id:104,
  images:'images/shoe22.jpeg',
  name:'shoe',
  price:2023,

  },
  {
  id:105,
  images:'images/tv1.jpeg',
  name:'television',
  price:2320,
  },
  {
  id:106,
  images:'images/tv2.jpeg',
  name:'television',
  price:2090,
  },
  {
  id:107,
  images:'images/tv3.jpeg',
  name:'television',
  price:2013,
  },
  
  {
  id:108,
  images:'images/tv5.jpeg',
  name:'television',
  price:2089,
  },
  {
  id:109,
  images:'images/tv6.jpeg',
  name:'television',
  price:2023,
  },
  {
  id:110,
  images:'images/shoe20.jpeg',
  name:'shoe',
  price:2089,
  },
  {
  id:111,
  images:'images/tv7.jpeg',
  name:'television',
  price:2077,
  },
  {
  id:112,
  images:'images/tv8.jpeg',
  name:'television',
  price:2230,
  },
  {
  id:113,
  images:'images/shoe10.jpg',
  name:'shoe',
  price:29000,
  },
 
  {
  id:114,
  images:'images/tv10.jpeg',
  name:'television',
  price:9000,
  },
  {
  id:115,
  images:'images/tv11.jpeg',
  name:'television',
  price:3455,
  },
  {
  id:116,
  images:'images/tv12.jpeg',
  name:'television',
  price:2230,
  },
  
{
  id:117,
  images:'images/tv14.jpeg',
  name:'television',
  price:2670,
  },
   {
  id:118,
  images:'images/wrist15.webp',
  name:'wristwatch',
  price:2034,
  },
  {
  id:119,
  images:'images/tv16.webp',
  name:'television',
  price:2000,
  },
  {
  id:120,
  images:'images/tv17.webp',
  name:'television',
  price:2340,
  },
    {
  id:121,
  images:'images/wrist8.webp',
  name:'wristwatch',
  price:2000,
  },
  {
  id:122,
  images:'images/tv19.webp',
  name:'television',
  price:2010,
  },
  
  {
  id:123,
  images:'images/tv21.webp',
  name:'television',
  price:2067,
  },
  {
  id:124,
  images:'images/cap10.jpeg',
  name:'cap',
  price:2055,
  },
 
  {
  id:125,
  images:'images/tv22.webp',
  name:'television',
  price:2450,
  },
  {
  id:126,
  images:'images/wrist1.jpeg',
  name:'wristwatch',
  price:2900,
  },
  {
  id:127,
  images:'images/wrist2.jpeg',
  name:'wristwatch',
  price:2450,
  },
  
  
  {
  id:128,
  images:'images/wrist5.jpeg',
  name:'wristwatch',
  price:2230,
  },

  {
  id:129,
  images:'images/wrist7.webp',
  name:'wristwatch',
  price:2670,
  },
 {
  id:130,
  images:'images/tv6.jpeg',
  name:'television',
  price:2900,
  },
   {
  id:131,
  images:'images/wrist9.webp',
  name:'wristwatch',
  price:2340,
  },
   {
  id:132,
  images:'images/wrist10.webp',
  name:'wristwatch',
  price:20,
  },
   {
  id:133,
  images:'images/wrist11.webp',
  name:'wristwatch',
  price:2120,
  },
   {
  id:134,
  images:'images/wrist12.webp',
  name:'wristwatch',
  price:2900,
  },
   {
  id:135,
  images:'images/wrist13.webp',
  name:'wristwatch',
  price:2056,
  },
   
   {
  id:136,
  images:'images/wrist16.webp',
  name:'wristwatch',
  price:2120,
  },
   {
  id:137,
  images:'images/wrist17.webp',
  name:'wristwatch',
  price:2670,
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

function Store() {
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
   <div className='alternate-store'>
      
       
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
<p>${value.price}</p>
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

export default Store;
