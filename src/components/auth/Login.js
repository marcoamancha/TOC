import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "../layout/NavBar";

const Login = () => {
    const [user, setUser] = useState({
        cedula: '',
        password: ''
    });
    //extraer usuario
    const {cedula, password} = user;
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <NavBar />
      <div className="bg-white  max-w-lg mx-auto p-8 md:p-12 mt-24 rounded-lg shadow-2xl">
      <h5 className="text-xl font-medium text-center text-gray-900">Iniciar Sesión</h5>
          <section className="mt-4">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">             
              <div>
                  <label htmlFor="cedula" className="block mb-2 text-sm font-medium text-gray-900">Su cédula</label>
                  <input 
                        type="cedula" 
                        name="cedula" 
                        id="cedula" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="CI: Sin guión" 
                        required
                        value={cedula}
                        onChange={handleChange}
                        />
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Su contraseña</label>
                  <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        required 
                        value={password}
                        onChange={handleChange}
                        />
              </div>
              <div className="flex items-start">
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                      </div>
                  </div>
                  <a href="#2" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>

              <button 
                    type="submit" 
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    value="Iniciar Sesión"
                    >Ingresar</button>
              
              <div className="text-sm font-medium text-gray-500">
                  No estás registrado? <NavLink to="/Register" className="text-blue-700 hover:underline dark:text-blue-500">Crear una cuenta </NavLink>
              </div>
          </form>
          </section>
      </div>
    </>
  )
}

export default Login;