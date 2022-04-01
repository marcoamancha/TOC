import { Slider } from "./Slider"; 
import { FaEllipsisH } from 'react-icons/fa';
export const CoverPage = () => {
  return (
    <section className="bg-azul_oscuro p-10" id="coverpage">
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
      <div className="flex justify-center items-center flex-col aspect-w-16 aspect-h-9">
        <img className="object-cover w-1/2 h-4/5" src="./img/arbol-color.png" alt="TOC" />       
        <h2 className="text-azul  text-xl my-2 md:text-4xl font-bold">Centro de Bienestar Humano</h2>       
        <h2 className="text-azul  text-xl my-2 md:text-4xl font-bold">Tocamos <small className="text-tomate text-xl md:text-4xl font-bold">tu vida</small></h2>
        <button className="inline-block text-sm px-4 py-2 mb-2 leading-none border rounded bg-tomate text-white font-bold border-white transform transition hover:scale-105 duration-300 ease-in-out">Escríbenos</button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Slider />
        <FaEllipsisH size={40} className="text-slate-300"/>
      </div>
    </div>
  </section>
  )
}
