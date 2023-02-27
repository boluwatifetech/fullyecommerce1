import React from 'react';
const data=[{
    id:1,
  images:'/images/wrist5.jpeg',
    name:'watch',
     quality:'high quality',
},
{
    id:2,
   images:'/images/tv8.jpeg',
    name:'tv',
     quality:'high quality',
},
{
    id:3,
    images:'/images/shoe20.jpeg',
    name:'shoe',
     quality:'high quality',
},

{
    id:4,
    images:'/images/phone6.jpeg',
    name:'phone',
     quality:'high quality',
},
{
    id:5,
    images:'/images/head26.webp',
    name:'watch',
     quality:'high quality',
},
{
    id:6,
    images:'/images/shoe13.jpg',
    name:'shoe',
     quality:'high quality',
},
{
    id:7,
images:'/images/head13.jpeg',
    name:'headset',
     quality:'high quality',
},
{
    id:8,
    images:'/images/wrist12.webp',
    name:'watch',
    quality:'high quality',
},

]
function Shortimg() {
  return (
    <div className='grid-shortimg'>
      {
        data.map((title)=>{
            return(
                <div className='shortimg-flex' key={title.id}>
                <div className='shortimg-content'>
                    <h4>{title.name}</h4>
                    <p>{title.quality}</p>
                    </div>
                    <div className='shortimg-img'>
                    <img src={title.images}/>
                    </div>
                </div>
            )
        })
      }
    </div>
  );
}

export default Shortimg;
