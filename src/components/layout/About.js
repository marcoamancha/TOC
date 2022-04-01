import {AiOutlineUsergroupAdd, AiOutlineLineChart, AiOutlineTrophy} from 'react-icons/ai';

export const About = () => {
  return (
    <section className="bg-azul_oscuro shadow-lg" id='about'>   
    <h2 className="text-white text-center py-8 font-bold text-5xl">Conoce Sobre Nosotros</h2>  
    <div className=''> 
      <h4 className="text-white text-center text-base mx-auto py-2 w-1/2 md:text-2xl">5 Años de Experiencia</h4>
      <article>
        <p className="text-white text-center text-base mx-auto py-2 w-1/2">Somos un equipo de trabajo dedicados a proveer servicios integrales asociados al bienestar humano desde un enfoque humanista en la ciencia, tecnología y creatividad</p>
      </article>
    </div>
    <div className='text-white text-center py-10 mx-4 flex gap-8 md:flex-row flex-col justify-center'>
        <div> 
          <div className='flex justify-center items-center'>
          <AiOutlineUsergroupAdd className="m-8 text-white" size={40} /> 
          </div> 
           <h2 className='font-bold'>NOSOTROS</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas expedita alias maiores deleniti quasi dolore ipsum laborum doloribus sunt. Ratione eveniet sapiente delectus modi asperiores quas corporis cum animi!</p>
        </div>
        <div>
        <div className='flex justify-center items-center'>
          <AiOutlineLineChart className="m-8 text-white" size={40} /> 
          </div> 
            <h2 className='font-bold'>MISIÓN</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore vero! Iste eos placeat cupiditate debitis molestiae error maxime dolores, quod id corrupti, magni assumenda! Dicta ipsam assumenda reprehenderit incidunt!</p>
        </div>
        <div>
        <div className='flex justify-center items-center'>
          <AiOutlineTrophy className="m-8 text-white" size={40} /> 
          </div> 
            <h2 className='font-bold'>VISIÓN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad repellendus corporis necessitatibus facere aperiam rem nobis quibusdam voluptas explicabo ut possimus architecto, quo excepturi voluptatum exercitationem soluta. Enim, ea!</p>
        </div>
    </div>
  </section>
  )
}
