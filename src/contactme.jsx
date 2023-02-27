import React from 'react';
import './main.css'
import {FaHome,FaEnvelope,FaPhone} from 'react-icons/fa'
function Contactme() {
  return (
    <div className='contact-container'>
    <div className='row'>
    <div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31646.
763592470412!2d5.7324519373774745!3d7.482312513350978!2m3!1f0!2f0!3f0!3m2!
1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c1212d629e42552!2sNifes%20Aaua!5e0!
3m2!1sen!2sng!4v1677171282981!5m2!1sen!2sng" 
width="600" height="450" className="border-0"
 allowFullScreen="" loading="lazy" 
 referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='contact-flex'>
<div className='contact-section'>
<h2>contact us</h2>
<form action='https://formspree.io/f/mlekndpr' method='POST'>
<p><input type="text" name='name' placeholder='enter your full name'/></p>
<p><input type="email" name='email' placeholder='enter your email'/></p>
<p><input type="number" name='phone number' placeholder='enter your phone number'/></p>
<p><textarea placeholder="enter more details" name='textarea'></textarea></p>
<button name='submit'>Submit</button>
</form>
</div>
<div className='link'>
<h2>link up with us</h2>
<div className='linkup-contact'>
    <FaHome className='contact-fa'/>
    <p>Cele Area,Akungba Akoko,<br></br>
Ondo State,Nigeria</p>
</div>
<div className='linkup-contact'>
    <FaPhone className='contact-fa'/>
    <a href='tel:07038513843'>07038513843</a>
</div>
<div className='linkup-contact'>
    <FaEnvelope className='contact-fa'/>
   <a href='mailto:boluabiola2020@gmail.com'>Boluabiola2020@gmail.com</a>
</div>
</div>
    </div>
      </div>
    </div>
  );
}

export default Contactme;
