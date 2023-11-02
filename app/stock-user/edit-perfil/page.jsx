"use client"

import user from "@/img/User.png"
import Image from "next/image"
import { useState } from "react";
import { useSession } from "next-auth/react";


export default function EditPerfil() {
  const [error, setError] = useState(null);

  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Recopila los datos del formulario
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/EditUser', { // Actualiza la ruta del controlador para el método PUT
        method: 'PUT', // Cambia el método a PUT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Procesa la respuesta exitosa
        console.log('Usuario actualizado correctamente');
      } else {
        // Procesa la respuesta de error
        const errorData = await response.json();
        console.log(errorData);
        setError(errorData.message); // El mensaje de error vendrá del servidor
      }
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al enviar el formulario.');
    }
    };
    
    return (
      <div className="w-full App-fondo">
        <div className="flex items-center content-center justify-center mt-[5%] w-2/3 mx-auto font-sans font-bold container-l">
          <div className="">
            <form onSubmit={handleSubmit} className="bg-black lblanca p-3 rounded-[67px] justify-items-center pl-20 border-2 border-[#0071E3]">
              <h1 className="p-4 text-2xl">Editar Perfil</h1>
              <div className="grid grid-cols-2 text-lg">
                <div className="p-5">
                  <div className="p-3 m-3">
                    <div className="p-1">
                      <label className="label">
                        <span className="grid pl-3 justify-items-start label-text p-1">Cambiar correo electrónico</span>
                      </label>
                      <input type="text" placeholder="user@gmail.com" name="email" className="input w-96 rounded-full lnegra p-1.5 px-5 border-2 border-[#0071E3]"></input>
                      <div className='grid pt-8 justify-items-end'>
                        <button type="submit" className="p-1 px-6 border rounded-full btn azul hover:border-sky-500">Modificar</button>
                      </div>
                    </div>
                    <div className="p-1">
                      <label className="label">
                        <span className="grid pl-3 justify-items-start label-text p-1">Cambiar contraseña</span>
                      </label>
                      <input type="password" placeholder="" name="password" className="input w-96 rounded-full lnegra p-1.5 border-2 px-5 border-[#0071E3]"></input>
                      <div className='grid pt-8 justify-items-end'>
                        <button type="submit" className="p-1 px-6 border rounded-full btn azul hover:border-sky-500">Modificar</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="grid py-2 justify-items-center">
                    <div className="flex items-stretch p-1 bg-white rounded-full">
                      <Image src={user} alt="Imagen de usuario" className="self-start p-1 border-white imgUs"/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {error && (
              <div className="bg-red-500 fixed text-white w-fit text-sm py-1 px-3 rounded-md mt-12">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    );
}