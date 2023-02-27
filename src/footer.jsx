import React from 'react';
import {Link} from 'react-router-dom'
import {FaFacebook,FaEnvelope,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer-cover'>
<div className='footer-email'>
    <h2><FaEnvelope className='envelope'/> send us an email</h2>
    <div className='input-email'>
    <input type='email'/>
    <button>Send</button>
    </div>
</div>
      <div className="footer-main">
        <div className='about'>
            <h2>contact us</h2>
            <address>cele area,akungba akoko,<br></br>ondo state,nigeria</address>
            <p className='tel'><a href="tel:07038513843">07038513843</a></p>
            <p><a href='mailto:boluabiola2020@gmail.com'>boluabiola2020@gmail.com</a></p>
            
        </div>
        <div className='footer-categories'>
        <h2>categories</h2>
        <div className='inline-fa'>
  <Link to='/shoe' className='fa-footer'>shoe</Link>
  <Link to='/tv'  className='fa-footer'>television</Link>
   <Link to='/cap'  className='fa-footer'>cap</Link>
    <Link to='/head'  className='fa-footer'>headphone</Link>
  <Link to='/phone'  className='fa-footer'>phone</Link>
       </div>
        </div>
        <div className='quickie'>
<h2>quick links</h2>
<div className='inline-fa'>
<Link to='/store'  className='fa-footer'>store</Link>
<Link to='/blog'  className='fa-footer'>blog</Link>
<Link to='/favourite'  className='fa-footer'>favourite</Link>
<Link to='/home'  className='fa-footer'>cart</Link>
</div>
        </div>
         <div className='support'>
<h2>support</h2>
<div className='inline-fa'>
<Link to='/store'  className='fa-footer'>store</Link>
<Link to='/blog'  className='fa-footer'>blog</Link>
<Link to='/favourite'  className='fa-footer'>favourite</Link>
<Link to='/home'  className='fa-footer'>cart</Link>
</div>
        </div>
         <div className='information'>
<h2>information</h2>
<div className='inline-fa'>
<Link to='/store'  className='fa-footer'>about us</Link>
<Link to='/blog'  className='fa-footer'>blog</Link>
<Link to='/favourite'  className='fa-footer'>favourite</Link>
<Link to='/home'  className='fa-footer'>faq</Link>
</div>
        </div>
      </div>
      <div className='footer-bottom'>
<div className='copy'>
<small>&copy;2023 powered by devbolu</small>
</div>
<div className='bottom-media'>
    <a href='https://facebook.com/Bolu Abiola' className='fa-footer foot'><FaFacebook/></a>
    <a href='https://Instagram.com/ blaqstix_01' className='fa-footer foot'><FaInstagram/></a>
    <a href='https://linkedin.com/Boluwatife Abiola' className='fa-footer foot'><FaLinkedin/></a>
    <a href='https://twitter.com/Boluwatife Abiola' className='fa-footer foot'><FaTwitter/></a>
</div>
      </div>
    </div>
  );
}

export default Footer;
