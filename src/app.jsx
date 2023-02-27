import React from 'react';
import './main.css'
import Home from './home'
import Blog from './blog'
import Thanks from './thanks'
import Favourite from './favourite'
import Store from './store'
import Nav from './nav'
import Footer from './footer'
import Contactme from './contactme'
import Cap from './cap'
import Phone from './phone'
import Shoe from './shoe'
import Tv from './television'
import Head from './headphone'
import Checkout from './checkout'
import Payment from './payment'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'



function  App() {
  return (
    <div>
   <Router>
  
    <Switch>
    
<Route exact path='/'>
 <Nav/>
<Home/>
<Footer/>
</Route>
<Route path='/blog'>
 <Nav/>
<Blog/>
<Footer/>
</Route>
<Route path='/favourite'>
 <Nav/>
<Favourite/>
<Footer/>
</Route>

<Route path='/thanks'>
 <Nav/>
  <Thanks/>
  <Footer/>
</Route>
<Route path='/payment'>
<Nav/>

<Payment/>

<Footer/>
</Route>
<Route path='/store'>
 <Nav/>
  <Store/>
  <Footer/>
</Route>
<Route path='/contactme'>
<Nav/>
<Contactme/>
<Footer/>
</Route>
<Route path='/cap'>
<Nav/>
  <Cap/>
  <Footer/>
</Route>
<Route path='/phone'>
<Nav/>
  <Phone/>
  <Footer/>
</Route>
<Route path='/shoe'>
<Nav/>
  <Shoe/>
  <Footer/>
</Route>
<Route path='/tv'>
<Nav/>
  <Tv/>
  <Footer/>
</Route>
<Route path='/head'>
<Nav/>
  <Head/>
  <Footer/>
</Route>
<Route path='/checkout'>
<Nav/>
  <Checkout/>
  <Footer/>
</Route>
    </Switch>
   </Router>
    </div>
  );
}

export default App;
