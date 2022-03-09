import {AiOutlineEnvironment, AiOutlinePhone, AiOutlineGlobal} from 'react-icons/ai';

export const Contact = () => {
  return (
    <section className="Contactos bg-tomate py-8">
      <h1 className="text-center text-white text-4xl my-2 font-bold">Comunícate con Nosotros</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
      <div className="grid grid-cols-2 grid-rows-3 w-1/2">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-white">
                <AiOutlineEnvironment className='text-azul m-4' />                
                </div>
              </div>              
              <div className="p-6 text-white">
                <h1>Direccion</h1>
                <p>- 4 de Julio y Manuel Pinos</p>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-white">                  
                  <AiOutlinePhone className='text-azul m-4' />              
                </div>
              </div> 
                <div className="p-6 text-white">
                  <h1>Teléfono</h1>
                  <p>- 0983163387</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full bg-white">
                  <AiOutlineGlobal className='text-azul m-4' />               
                  </div>
                </div> 
               <div className="p-6 text-white">
                 <h1>Correo</h1>
                 <p>tocbienestarhumano@outlook.com</p>
               </div>
            </div>
      </div>
      <div style={{backgroundImage: `url('./img/arbol.png')`}} className="bg-no-repeat  bg-contain bg-top px-4 flex justify-center"> 
        <form className="w-4/5 mt-4" action="">
            <div>
                <label className="block text-white font-bold my-2" htmlFor="">Nombres Completos</label>  
                <input className="shadow appearance-none border w-full py-1 px-3 text-gray-700" type="text" placeholder="Nombres"/> 
            </div>
            <div>
                <label className="block text-white font-bold my-2" htmlFor="">Correo electrónico</label>  
                <input className="shadow appearance-none border w-full py-1 px-3 text-gray-700" type="text" placeholder="Correo"/>                  
            </div>
            <div>
                <label className="block text-white font-bold my-2" htmlFor="">Asunto</label>
                <textarea className="w-full text-gray-700" name="" id="" cols="32" rows="3"></textarea>
            </div>
            <div className="flex items-center justify-center mt-2">
                <button className="bg-white text-azul font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                 Enviar
                </button>                
              </div>
        </form>
      </div>
      </div>
    </section>
  )
}
