import React from 'react'

export const Services = () => {
  return (
     <div className="grid md:grid-rows-2 my-8">
            <h1 className="text-azul text-xl text-center md:text-4xl font-bold">Nuestros servicios</h1>
            <h1 className="text-azul text-xl text-center md:text-2xl font-bold mb-4">Servicios integrales asociados al bienestar de ti y toda tu familia.</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md ml-2">
                <a href="#2">
                    <img className="rounded-t-lg" src="/img/Salud.jpeg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#4">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Salud</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>                    
                </div>
            </div>      
            <div className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md ml-2">
                <a href="#2">
                    <img className="rounded-t-lg" src="/img/Salud.jpeg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#4">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Ambiental</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>                    
                </div>
            </div>   
            <div className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md ml-2">
                <a href="#2">
                    <img className="rounded-t-lg" src="/img/Salud.jpeg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#4">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Educación-Capacitaciones</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>                    
                </div>
            </div>   
            <div className="max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md ml-2">
                <a href="#2">
                    <img className="rounded-t-lg" src="/img/Salud.jpeg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#4">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Jurídico</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>                    
                </div>
            </div>   
        </div>
     </div>
  )
}
