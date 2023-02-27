import React from 'react';
import './main.css'
import {Link} from 'react-router-dom'
const data=[{
  id:1,
  images:'images/blog1.jpeg',
  date:'3rd of january',
  name:'frank jonathan',
  word:'i bought some products from shoplit store two years ago and the products are still up and running',
},
{
  id:2,
  images:'images/blog2.jpeg',
  date:'3rd of march',
  name:'jonathan nelson',
  word:'i ordered from shotlit and within a few seconds the products got to me',
},
{
  id:3,
  images:'images/blog3.jpeg',
  date:'4th of april',
  name:'segun falana',
  word:'shoplit offers fantastic products which makes them gain more and more customers',
},
{
  id:4,
  images:'images/blog4.jpeg',
  date:'5th of august',
  name:'jonathan welson',
  word:' shoplit get the best product in store the offer excellect which it comes to quality products',
},
{
  id:5,
  images:'images/blog5.jpeg',
  date:'2nd of novenber',
  name:'frand edward',
  word:"i'm always craving for the products of shoplit which makes me patronize them every time i'm in need ",
},
{
  id:6,
  images:'images/blog6.jpeg',
  date:'8th  of february',
  name:'ferdinand',
  word:"since the day my friends introduce me shoplit i found a great place to see good and quality products",
},
]
function Blogger() {
  return (
    <div>
  
   
   
<div className='blog-container'>
{
  data.map((value)=>{
    return(
      <div className='blog-items' key={value.id}>
<div className='blog-images'>
  <img src={value.images}/>
</div>
<i>{value.date}</i>
<h3>{value.name}</h3>
<p>{value.word}</p>
<Link to='/blog'>
<button>read more</button>
</Link>
      </div>
    )
  })
}
</div>
    </div>
    
  );
}

export default Blogger;
