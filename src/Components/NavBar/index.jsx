import { NavLink } from "react-router-dom";
import {RequestApiBooks} from '../../Context';
import { useContext,useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {getAllCategories} from "../../services/category.service"

import 'flowbite'
function NavBar (){
    const {user,loginWithRedirect,logout,isAuthenticated,getAccessTokenSilently}= useAuth0();
    const context = useContext(RequestApiBooks)
    const [categories,setCategories] = useState([]);
    

    useEffect(() => {
      async function getCategories() {
        if (!isAuthenticated) return;
    
        try {
          const token = await getAccessTokenSilently({
            authorizationParams: {
              audience: import.meta.env.VITE_AUTH0_AUDIENCE,
              scope: import.meta.env.VITE_AUTH0_SCOPE,
            },
          });
    
          const response = await getAllCategories(token);
          
          setCategories(response);
        } catch (error) {
          console.error("Error obteniendo categorías:", error);
        }
      }
    
      getCategories();
    }, [isAuthenticated, getAccessTokenSilently]); 
    
    
    return (
      isAuthenticated &&
<nav className="bg-white border-gray-200 dark:bg-gray-900 ">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="src/images/creo.png" className="h-8 rounded-xl" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Biblioteca Personal</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button  type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img  className="w-8 h-8 rounded-full" src={user.picture} alt="user photo"/>
      </button>
      
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" onClick={()=>loginWithRedirect()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log In</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Opciones</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Temas</a>
          </li>
          <li>
            <a href="#" onClick={()=>logout()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Salir</a>
          </li>
        </ul>
      </div>
      
      
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
            <NavLink  onClick={()=>context.setSearchByCategory()} to='/' className ="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0">
                    Todo
            </NavLink>
      </li>
      {
        categories?.map((categorie)=>(
          <li key={categorie?.id} >
            <NavLink  onClick={()=>context.setSearchByCategory(`${categorie?.name}`)} to='/' className ="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    {categorie.name}
            </NavLink>
      </li>
        ))
      }
    </ul>
  </div>
  </div>
</nav>
    );
}
export default NavBar