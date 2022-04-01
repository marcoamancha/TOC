import React from 'react'

export const Toast = ({alerta, setShow}) => {
   const {title, msg, bgColor} = alerta;
   const handleShow = () => {
     setShow(false);
   }
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transform translate-y-64 transition-transform duration-1000">
            <div className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${bgColor}`}>
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    <b className="capitalize">{title}</b> {msg}
                </span>
                <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={handleShow}
                >
                    <span>X</span>
                </button>      
           </div>
    </div>
  )
}
