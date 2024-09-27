//import { useState } from 'react'
import {useRoutes,BrowserRouter} from 'react-router-dom'
import Home from '../Home';
import Books from '../Books'
import SingIn from '../SingIn'
import NotFound from '../NotFound'
import NavBar from '../../Components/NavBar';
import './App.css'

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/books',element:<Books/>},
    {path: '/sing-in',element:<SingIn/>},
    {path: '/*',element:<NotFound/>}
  ])

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>

  )
}

export default App
