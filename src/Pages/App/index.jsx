//import { useState } from 'react'
import Home from '../Home';
import Books from '../Books'
import SingIn from '../SingIn'
import NotFound from '../NotFound'
import './App.css'

function App() {


  return (
    <div className='bg-red-100'>
      <Home/>
      <Books/>
      <SingIn/>
      <NotFound/>
    </div>

  )
}

export default App
