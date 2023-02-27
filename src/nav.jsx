import React,{useRef} from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes,FaFigma,FaShoppingCart} from 'react-icons/fa'
import './main.css'
import {useStateValue} from './StateProvider'
function Nav() {
 const [{basket},dispatch]=useStateValue()
    const navRef=useRef()
const showandclosebar=()=>{
    navRef.current.classList.toggle('responsive-bar')
}
  return (
    <div className='header'>
      <header>
  <div className='header-1'>
        <h1><FaFigma className='figma'/>shop<span>lit</span></h1>
      </div>
      <div>
        <nav ref={navRef}>
            <ul>
                <li><Link to='/' onClick={showandclosebar}className='list'>home</Link></li>
                 <li><Link to='/store' onClick={showandclosebar} className="list">store</Link></li>
                   <li><Link to='/blog' onClick={showandclosebar} className='list'> blog</Link></li>
          <li><Link to='/favourite' onClick={showandclosebar} className='list'>favourite</Link></li>
                       <li><Link to='/contactme' onClick={showandclosebar} className='list'>contact me</Link></li>
                            <li><Link to='/login' onClick={showandclosebar} className='list'>login</Link></li>
            </ul>
            <FaTimes className='fa times' onClick={showandclosebar}/>
         
        </nav>
        </div>
        <div className='camp-menubar'>
  <FaBars className='fa bar' onClick={showandclosebar}/>
  <Link to='/checkout'><p><FaShoppingCart className='fa cart'/></p></Link><span>{basket?.length}</span>

</div>
         </header>
         <div className='shop-categories'>
<div className='categories'>
<h2>categories</h2>
<div className='drop-items'>
   <p> <Link to='/shoe' className='link-drop'>shoes</Link><span></span></p>
    <p> <Link to='/tv' className='link-drop'>television</Link><span></span></p>
     <p> <Link to='/cap' className='link-drop'>cap</Link><span></span></p>
 <p> <Link to='/phone' className='link-drop'>phone</Link><span></span></p>
 <p> <Link to='/head' className='link-drop'>headphone</Link><span></span></p>
</div>
</div>
<div className='hot'>
 <h2>HotLine:</h2><a href='tel:07038513843'>07038513843</a>
 </div>
         </div>
        
       </div>
  );
}

export default Nav;
