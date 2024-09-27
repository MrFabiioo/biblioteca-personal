import { NavLink } from "react-router-dom";

function NavBar (){
    const activeStyle ='underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>

                <li className='font-bold text-lg'>
                    <NavLink to='/'>
                        Biblioteca Personal
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/novelas-historicas' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Novelas Historicas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/poesia' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Poesia
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cuentos' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Cuentos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/desarrollo-personal' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Desarrollo personal y espiritual
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ciencia' className ={({isActive})=> isActive ? activeStyle: undefined}>
                        Ciencia
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