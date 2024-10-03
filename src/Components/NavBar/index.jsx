import { NavLink } from "react-router-dom";
import {RequestApiBooks} from '../../Context'
import { useContext } from "react"
function NavBar (){
    const activeStyle ='underline underline-offset-4'
    const context = useContext(RequestApiBooks)
    return (
        <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>

                <li className='font-bold text-lg'>
                    <NavLink to='/'>
                        Biblioteca Personal
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>context.setSearchByCategory()} to='/' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>context.setSearchByCategory('miscellaneous')} to='/miscellaneous' className ={({isActive})=> isActive ? activeStyle: undefined}>
                    miscellaneous
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>context.setSearchByCategory('clothes')} to='/clothes' className ={({isActive})=> isActive ? activeStyle: undefined}>
                    clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>context.setSearchByCategory('furniture')}  to='/furniture' className ={({isActive})=> isActive ? activeStyle: undefined}>
                    furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>context.setSearchByCategory('shoes')}  to='/shoes' className ={({isActive})=> isActive ? activeStyle: undefined}>
                    shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>context.setSearchByCategory('electronics')}  to='/electronics' className ={({isActive})=> isActive ? activeStyle: undefined}>
                    electronics
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink to='/' className='text-black/60 font-semibold'>
                        Fabio Ortega
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/autores' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Autores
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sing-in' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Sing In
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Agregar nueva reseña
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}
export default NavBar