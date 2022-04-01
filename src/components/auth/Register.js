import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "../layout/NavBar";

import { Toast } from "../layout/Toast";

const Register = () => {
    const [names, setName] = useState('');
    const [cedula, setCedula] = useState('');
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [alerta, setAlerta] = useState({});
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validar que todos los campos esten llenos
        if([names, cedula, password, confirmar].includes('')){
            setAlerta({
                title: 'Error',
                msg: 'Todos los campos son obligatorios',
                bgColor: 'bg-red-600',
            })
            setShow(true)
            return
        }
        //Verificar que las contraseñas sean iguales
        if(password !== confirmar){
            setAlerta({
                title: 'Error',
                msg: 'Las contraseñas no son iguales',
                bgColor: 'bg-red-600',
            })
            setShow(true)
            return
        }

        if(password.length < 6){
            setAlerta({
                title: 'Error',
                msg: 'La contraseña debe tener al menos 6 caracteres',
                bgColor: 'bg-red-600',                
            })
            setShow(true)
            return
        }
        
        setAlerta({})
        //Crear Usuario en la api
        console.log('Crando');
    }
    
  return (
    <>
    <NavBar />
    {show && <Toast alerta={alerta}  setShow={setShow} /> }
    <div className="bg-white  max-w-lg mx-auto p-8 md:p-12 mt-24 rounded-lg shadow-2xl">
      <h5 className="text-xl font-medium text-center text-gray-900">Crear una cuenta</h5>
          <section className="mt-4">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">             
              <div>
                  <label htmlFor="names" className="block mb-2 text-sm font-medium text-gray-900">Nombres</label>
                  <input 
                        type="text" 
                        name="names" 
                        id="names" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Nombres completos" 
                        value={names}
                        onChange={e => setName(e.target.value) }
                        />
              </div>
              <div>
                  <label htmlFor="cedula" className="block mb-2 text-sm font-medium text-gray-900">Cédula</label>
                  <input 
                        type="number" 
                        name="cedula" 
                        id="cedula" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="CI: Sin guión" 
                        value={cedula}
                        onChange={e => setCedula(e.target.value) }
                        />
              </div>
              {/* <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="nombre@email.com" 
                        value={email}
                        onChange={handleChange}
                        />
              </div> */}
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Su contraseña</label>
                  <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        value={password}
                        onChange={e => setPassword(e.target.value) }
                        />
              </div>       
              <div>
                  <label htmlFor="confirmar" className="block mb-2 text-sm font-medium text-gray-900">Confirmar contraseña</label>
                  <input 
                        type="password" 
                        name="confirmar" 
                        id="confirmar" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                        value={confirmar}
                        onChange={e => setConfirmar(e.target.value) }
                        />
              </div>        
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
              <div className="text-sm font-medium text-gray-500">
                  Ya tienes una cuenta? <NavLink to="/Login" className="text-blue-700 hover:underline dark:text-blue-500">Ingresar </NavLink>
              </div>
          </form>
          </section>
      </div>
  </>
  )
}

export default Register;
