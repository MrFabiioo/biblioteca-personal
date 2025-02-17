//import { useState } from 'react'
import {useRoutes,BrowserRouter} from 'react-router-dom'
import { RequestApiBooksProvider } from '../../Context';
import Home from '../Home';
import SingIn from '../SingIn'
import NotFound from '../NotFound'
import NavBar from '../../Components/NavBar';
import BookDetails from '../../Components/BookDetails';
import './App.css'
import Footer from '../../Components/Footer';

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/historicas', element: <Home/>},
    {path: '/poesia', element: <Home/>},
    {path: '/ciencia-ficcion', element: <Home/>},
    {path: '/inteligencia-emocional', element: <Home/>},
    {path: '/espiritualidad',element:<Home/>},
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
      <NavBar/>
      <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </RequestApiBooksProvider>

  )
}

export default App
