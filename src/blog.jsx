import React from 'react';
import Blogger from './blogger'
import {Link} from 'react-router-dom'
function Blog() {
  return (
    <div>
     <div className="row">
       <div className='every'>
    <Link to='/' className='every-content'>home</Link>/
    <Link to='/blog' className='every-content'>blog</Link>
    </div>
      <Blogger/>
    </div>
    </div>
  );
}

export default Blog;
