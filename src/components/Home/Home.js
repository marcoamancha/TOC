import {FaLongArrowAltRight} from 'react-icons/fa';
import { About } from '../layout/About';
import { Contact } from '../layout/Contact';
import { CoverPage } from '../layout/CoverPage';
import { Footer } from '../layout/Footer';
import {NavBar} from '../layout/NavBar';
import { Reserve } from '../layout/Reserve';
import { Services } from '../layout/Services';

const Home = () => {
  return (
    <>
    <NavBar  />

    <CoverPage />

    <Reserve />

    <Services />

    <About />

    <section className="ubicacion py-4">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="mt-2 md:mt-8 flex justify-center">
        <div className="bg-slate-200 border-2 pt-8 px-10  md:w-1/2">
          <img src="./img/iPhone X2.png" width="100%" height="25%" alt="" />
        </div>
      </div>
      <div className="pt-2 md:pt-40 pl-8">
        <h2 className="font-bold text-4xl">Ubícanos</h2>
        <p className="pt-8 w-9/12 mb-4" id='contact'>Estamos ubicados en la avenida 4 de Julio y Manuel Pinos, Referencia: Av 4 panamericana en el edificio esquinero.</p>
        <a className="text-azul" href="#4">Ir a la ubicación <FaLongArrowAltRight size={25} className='inline'/> </a>
      </div>
    </div>
    </section>

    <Contact />
    <Footer />
   
    </>
  )
}

export default Home;
