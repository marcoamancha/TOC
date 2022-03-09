import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export const NavBar = () => {
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
    }
  return (
    <nav className="flex items-center justify-between shadow-xl flex-wrap bg-white p-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="object-cover w-[85px] h-[43px] mr-8" src="./img/logo_letras_colores.png" alt="TOC" />
            </div>
            <div className="block lg:hidden">
            <button onClick={handleShow} className="flex items-center px-3 py-2 border rounded text-azul border-teal-400" id="mobile-menu">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
           {show && (
                <div className="mobile-link w-full pt-2 block flex-grow lg:flex lg:items-center lg:w-auto ml-4">
                <div className="text-sm  lg:flex-grow">        
                    <NavLink to="/" className="block cursor-default text-xl mt-4 lg:inline-block lg:mt-0 text-azul font-bold mr-4 hover:scale-105 duration-300 ease-in-out hover:text-white hover:bg-azul rounded-sm p-1">
                        Inicio
                    </NavLink>          
                    <HashLink to="#services" smooth className="block cursor-default text-xl mt-4 lg:inline-block lg:mt-0 text-azul font-bold mr-4 hover:scale-105 duration-300 ease-in-out hover:text-white hover:bg-azul rounded-sm p-1">
                        Servicios
                    </HashLink>
                    <HashLink to="#about" smooth className="block cursor-default text-xl mt-4 lg:inline-block lg:mt-0 text-azul font-bold mr-4 hover:scale-105 duration-300 ease-in-out hover:text-white hover:bg-azul rounded-sm p-1">
                        Nosotros
                    </HashLink>
                    <HashLink to="#contact" smooth className="block cursor-default text-xl mt-4 lg:inline-block lg:mt-0 text-azul font-bold  hover:scale-105 duration-300 ease-in-out hover:text-white hover:bg-azul rounded-sm p-1">
                        Contactos
                    </HashLink>            
                </div>
                <div>
                    <NavLink to="/Login" className="inline-block text-sm px-4 py-2 mr-2 leading-none border rounded bg-tomate text-white font-bold border-white  hover:bg-azul hover:text-white hover:border-teal-100 mt-4 lg:mt-0 transform transition hover:scale-105 duration-300 ease-in-out">Ingresar</NavLink>
                    <NavLink to="/Register" className="inline-block text-sm px-4 py-2 leading-none border rounded bg-tomate text-white font-bold border-white hover:bg-azul hover:text-white hover:border-teal-100  mt-4 lg:mt-0 transform transition hover:scale-105 duration-300 ease-in-out">Registrarse</NavLink>
               
                </div>
            </div>
           )}
    </nav>
  )
}
