import React from 'react';
import Favour from './favour'
import {Link} from 'react-router-dom'
function Favourite() {
  return (
    <div>
      <div className='row'>
      <div className='every'>
    <Link to='/' className='every-content'>home</Link>/
    <Link to='/favourite' className='every-content'>favourite</Link>
    </div>
<Favour/>
      </div>
    </div>
  );
}

export default Favourite;
