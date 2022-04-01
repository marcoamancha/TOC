import {NavLink} from 'react-router-dom';
import {FaCheckCircle} from 'react-icons/fa';

export const Reserve = () => {
  return (
    <div className="bg-tomate">
         <h4 className="text-white text-center text-base font-bold mx-auto py-2 w-1/2 md:text-5xl md:py-8">Reserva tu cita de una manera facil y sencilla</h4>
        <div className="my-2 text-center justify-center md:my-8">
            <NavLink to='/Login' className="inline-block text-sm px-4 py-2 mr-2 leading-none border rounded bg-white text-tomate font-bold mt-4 lg:mt-0 transform transition hover:scale-105 duration-300 ease-in-out">Reservar</NavLink>
        </div>        
        <div className="text-white text-center py-10 flex gap-8 md:flex-row flex-col lg:gap-80 justify-center" id="services">
            <h1><FaCheckCircle className="mr-2 inline" />Fácil</h1>
            <h1><FaCheckCircle className="mr-2 inline"/>Rápido</h1>
            <h1><FaCheckCircle className="mr-2 inline"/>Sencillo</h1>                 
        </div>
        
    </div>
  )
}
