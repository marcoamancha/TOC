import {AiOutlineGroup} from 'react-icons/ai';

export const About = () => {
  return (
    <section className="bg-azul_oscuro shadow-lg">   
    <h2 className="text-white text-center py-8 font-bold text-5xl">Quiénes Somos</h2>  
    <div className="grid grid-cols-1 md:grid-cols-2">        
      <div style={{backgroundImage: `url('./img/arbol-color.png')`}} className="bg-no-repeat  bg-contain bg-top flex justify-center items-center">        
         {/* <img className="object-cover w-1/2 h-4/5" src="./img/arbol-color.png" alt="arbol" />        */}
      </div>
      <div className="w-full md:w-4/5 grid grid-rows-3 grid-cols-1 md:grid-cols-2 bg-white">
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-azul">
                 <AiOutlineGroup className="m-8 text-white" size={20} />            
          </div>
        </div>
        <div className="p-4">
         <h1 className="font-bold">NOSOTROS</h1>
         <p>Somos un equipo de trabajo dedicados a proveer servicios integrales asociados al bienestar humano desde un enfoque humanista en la ciencia, tecnología y creatividad.</p>
        </div>
        <div className="flex justify-center items-center bg-purpura">
          <div className="rounded-full bg-azul">
          <AiOutlineGroup className="m-8 text-white" size={20} />              
          </div>
        </div>
        <div className="p-4 bg-purpura">
          <h1 className="font-bold">MISIÓN</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla rem dolores quae tempora incidunt ut voluptas tenetur a, vitae optio</p>
        </div>
        <div className="flex justify-center items-center bg-purpura">
          <div className="rounded-full bg-azul">
          <AiOutlineGroup className="m-8 text-white" size={20} />             
          </div>
        </div>
        <div className="p-4 bg-purpura">
          <h1 className="font-bold">VISIÓN</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla rem dolores quae tempora incidunt ut voluptas tenetur a, vitae optio</p>
        </div>
      </div>
    </div>
  </section>
  )
}
