import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer(){
    return(
<footer className="bg-white  shadow-sm dark:bg-gray-900 mt-auto">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-8 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/src/images/logo.png" className="h-8 rounded-xl" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Biblioteca Personal</span>
            </a>
            <ul className="flex flex-wrap items-center aling-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a target="_blank" href="/" className="hover:underline me-4 md:me-6 flex"><FaHome /></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/fabioortega0206/" className="hover:underline me-4 md:me-6 flex"><SlSocialInstagram /></a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/MrFabiioo" className="hover:underline me-4 md:me-6 flex"><FaGithub /></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/fabio.ortegaxd" className="hover:underline me-4 md:me-6 flex"><FaFacebook /></a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Jose Fabio Ortega Estrada™</a>. Todos los derechos reservados.</span>
    </div>
</footer>
    );
}

export default Footer;