import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube} from 'react-icons/ai';
import {HashLink} from 'react-router-hash-link';

export const Footer = () => {
  const instagram = 'https://www.instagram.com/toccentrodebienestarhumano/',
        facebook = 'https://www.facebook.com/TocCompany';
  return (
    <footer className="bg-azul_oscuro pt-4">
      <div className="grid grid-cols-6 gap-4" >
        <div className="col-start-2 col-span-4 flex justify-center ">
            <figure>
                <a href="#1">
                    <img className="object-cover w-[120px] h-[60px]" src="./img/Solo logo.png" alt="TOC" />
                </a>
            </figure>
        </div>
        <div className="col-start-2 col-span-4 flex justify-center text-white">
          <HashLink to="#coverpage" smooth className="ml-2">Inicio</HashLink>
          <HashLink to="#services" smooth className="ml-2">Servicios</HashLink>
          <HashLink to="#about" smooth className="ml-2">Nosotros</HashLink>
          <HashLink to="#contact" smooth className="ml-2">Contactos</HashLink>                  
        </div>
        <div className="col-start-2 col-span-4 flex justify-center text-white mt-4">         
          <hr className="w-full" />
       </div>      
        <div className="col-start-1 col-end-3 flex justify-center text-white text-lg">
         <p>&copy; 2022<b> TOC</b> <small className="text-lg"> - Todos los Derechos Reservados.</small></p>
        </div>
        <div className=" col-end-7 col-span-2 text-white flex justify-center text-xl mb-6">           
            <a target='_blank' rel="noreferrer" href={facebook}><AiOutlineFacebook className='ml-2' size={24}/></a>  
            <a target='_blank' rel="noreferrer" href={instagram}><AiOutlineInstagram className='ml-2' size={24}/></a>     
            <a target='_blank' rel="noreferrer" href={facebook}><AiOutlineWhatsApp className='ml-2' size={24}/></a>                      
            <a href="#7"><AiOutlineYoutube className='ml-2' size={24}/></a>            
        </div>
        
      </div>
     
  </footer>
  )
}
