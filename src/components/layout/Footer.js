import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube} from 'react-icons/ai';
import {HashLink} from 'react-router-hash-link';

export const Footer = () => {
  const instagram = 'https://www.instagram.com/toccentrodebienestarhumano/',
        facebook = 'https://www.facebook.com/TocCompany';
  return (
  <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div className="p-4 w-full text-center bg-white rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Cuente con nosotros desde cualquier lugar</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Manténgase actualizado descargando nuestra aplicación.</p>
            <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="#3" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Descargar</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                    </div>
                </a>
                <a href="#4" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                    <div className="text-left">
                        <div className="mb-1 text-xs">Ir a</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                    </div>
                </a>
            </div>
        </div>
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">   
        <img src="./img/Solo logo.png" className="mr-3 h-8" alt="Toc" />            
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <HashLink to="#coverpage" smooth className="mr-4 hover:underline md:mr-6 ">Inicio</HashLink>
            </li>
            <li>
                <HashLink to="#services" smooth className="mr-4 hover:underline md:mr-6">Servicios</HashLink>
            </li>
            <li>
                <HashLink to="#about" smooth className="mr-4 hover:underline md:mr-6 ">Nosotros</HashLink>
            </li>
            <li>
                <HashLink  to="#contact" smooth className="hover:underline">Contactos</HashLink>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">TOC™</a>. Todos los derechos reservados.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a target='_blank' rel="noreferrer" href={facebook}><AiOutlineFacebook className='ml-2 text-gray-500 hover:text-white' size={24}/></a> 
            <a target='_blank' rel="noreferrer" href={instagram}><AiOutlineInstagram className='ml-2 text-gray-500 hover:text-white' size={24}/></a>
            <a target='_blank' rel="noreferrer" href={facebook}><AiOutlineWhatsApp className='ml-2 text-gray-500 hover:text-white' size={24}/></a>                      
            <a href="#7"><AiOutlineYoutube className='ml-2 text-gray-500' size={24}/></a>    
            
      </div>
    </div>
</footer>
  )
}
