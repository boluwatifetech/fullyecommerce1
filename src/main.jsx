import React from 'react'
import ReactDom  from 'react-dom'
import App from './app'
import './main.css'
import {StateProvider} from './StateProvider'
import reducer, {initialState} from './reducer'
function Advance(){
  return(
    <div className='nav-bar'>
   <StateProvider initialState={initialState} reducer={reducer}>
    <App/>
   </StateProvider>
    </div>
  )
}

ReactDom.render(<Advance/>,document.getElementById('root'))