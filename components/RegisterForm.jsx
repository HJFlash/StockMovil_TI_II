"use client"

import { useState } from "react";
import Image from "next/image";
import user from "@/img/User.png";

export default function RegisterForm() {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Recopila los datos del formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/register', { // Actualiza la ruta del controlador
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          autorizacion: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Procesa la respuesta exitosa
      } else {
        // Procesa la respuesta de error
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al enviar el formulario.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black lblanca p-3 rounded-[67px] justify-items-center pl-20 border-2 border-[#0071E3]">
      <h1 className="p-4 text-2xl">Crear usuario</h1>
      <div className="grid grid-cols-2 text-lg">
        <div className="p-5">
          <div className="grid grid-cols-2 p-3">
            <div className="NOMBRE">
              <label className="label">
                <span className="grid pl-3 justify-items-start label-text">Nombre</span>
                <input type="text" name="nombre" placeholder="Nombre" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 px-5 border-2 border-[#0071E3]" autocomplete="off"/>
              </label>
            </div>
            <div className="APELLIDO">
              <label className="label">
                <span className="grid pl-3 justify-items-start label-text">Apellido</span>
                <input type="text" name="apellido" placeholder="Apellido" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 px-5 border-2 border-[#0071E3]" autocomplete="off"/>
              </label>
            </div>
          </div>
          <div className="p-3">
            <div className="p-1">
              <label className="label">
                <span className="grid pl-3 justify-items-start label-text">Nombre de usuario</span>
                <input type="text" name="usuario" placeholder="Usuario" className="input w-full max-w-xs focus:outline-none rounded-full lnegra p-1 px-5 border-2 border-[#0071E3]" autocomplete="off"/>
              </label>
            </div>
            <div className="p-1">
              <label className="label">
                <span className="grid pl-3 justify-items-start label-text">Numero de documento</span>
                <input type="text" name="n_documento" placeholder="RUT" className="input w-full max-w-xs focus:outline-none rounded-full lnegra p-1 px-5 border-2 border-[#0071E3]" autocomplete="off"/>
              </label>
            </div>
            <div className="p-1">
              <label className="label">
                <span className="grid pl-3 justify-items-start label-text">Email</span>
                <input type="text" name="email" placeholder="Correo electrónico" className="input w-full max-w-xs focus:outline-none rounded-full lnegra p-1 px-5 border-2 border-[#0071E3]" autocomplete="off"/>
              </label>
            </div>
            <div className="p-1">
              <label className="label">
                <span className="grid pl-3 justify-items-start label-text">Contraseña</span>
                <input type="text" name="password" placeholder="Contraseña" className="input w-full max-w-xs focus:outline-none rounded-full lnegra p-1 px-5 border-2 border-[#0071E3]" autocomplete="off"/>
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 p-3">
            <div className="">
              <h1>Fecha de nacimiento</h1>
              <input type="date" name="fec_Nacimiento" className="p-1 px-5 focus:outline-none rounded-full azul border transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300" />
            </div>
            <div>
              <h1>Administrador</h1>
              <label className="label">
                <input className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-white before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-blue-500 dark:after:bg-white dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]" 
                type="checkbox" name="administrador" role="switch" id="flexSwitchCheckDefault" />
              </label>
            </div>
          </div>
          <div className="grid py-2 justify-items-center">
            <div className="flex items-stretch p-1 bg-white rounded-full">
              <Image src={user} alt="Imagen de usuario" className="self-start p-1 border-white imgUs" />
            </div>
          </div>
          <div className='grid py-10 pt-10 pr-10 justify-items-end'>
            <button className="p-1 px-6 border rounded-full btn azul transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">Crear usuario</button>
            {error && (
              <div className="bg-red-500 fixed text-white w-fit text-sm py-1 px-3 rounded-md mt-12">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
