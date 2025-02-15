//import { useState } from 'react'
import {useRoutes,BrowserRouter} from 'react-router-dom'
import { RequestApiBooksProvider } from '../../Context';
import Home from '../Home';
import SingIn from '../SingIn'
import NotFound from '../NotFound'
import NavBar from '../../Components/NavBar';
import BookDetails from '../../Components/BookDetails';
import './App.css'

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/miscellaneous', element: <Home/>},
    {path: '/clothes', element: <Home/>},
    {path: '/furniture', element: <Home/>},
    {path: '/shoes', element: <Home/>},
    {path: '/electronics',element:<Home/>},
    {path: '/sing-in',element:<SingIn/>},
    {path: '/*',element:<NotFound/>},
    {path:"/book/:id",element:<BookDetails/>}
  ])

  return routes;
}

function App() {
  return (
    < RequestApiBooksProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter>
    </RequestApiBooksProvider>

  )
}

export default App
