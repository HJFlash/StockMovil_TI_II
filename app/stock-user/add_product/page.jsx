"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function Addproduct(){
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Recopila los datos del formulario
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch('/api/newproduct', { // Actualiza la ruta del controlador
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
            setSuccessMessage("Se ha añadido el producto correctamente");
            location.reload()
          // Procesa la respuesta exitosa
        } else {
          // Procesa la respuesta de error
          const errorData = await response.json();
          setError(errorData.error);
        }
      } catch (error) {
        console.error(error);
        setError('Ocurrió un error al enviar el formulario.');
        setSuccessMessage(""); //Limpia en caso de que haya un error anteriormente
      }
    }

    return (
        <div className="App-fondo flex items-center content-center justify-center mt-[3%] mx-auto font-sans font-bold container-l">
            <motion.form 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            onSubmit={handleSubmit} className="bg-black lblanca p-8 pl-10 rounded-[67px] justify-items-center border-2 border-[#0071E3]">
                <h1 className="text-2xl mb-3 ml-5">Agregar producto</h1>
                <div className="grid grid-cols-2 p-5 w-full">
                    <div className="p-3">
                        <div className="pb-2 w-96">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Codigo de barras</span>
                            <input type="number" name="CodigoBarras" min="0" placeholder="Ingresa Codigo de barras" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autoComplete="off"/>
                            </label>
                        </div>
                        <div className="pb-2">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Nombre</span>
                            <input type="text" name="Nombre" placeholder="Ingresa nombre de producto" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autoComplete="off"/>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Cantidad</span>
                            <input type="number" name="Cantidad" placeholder="Ingresa cantidad" min="0" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autoComplete="off"/>
                            </label>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="pb-2">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Precio</span>
                            <input type="number" name="Precio" placeholder="Ingresa precio" min="0" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autoComplete="off"/>
                            </label>
                        </div>
                        <div className="pb-2">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Oferta</span>
                            <input type="number" name="Oferta" placeholder="Ingresa oferta" min="0" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autoComplete="off"/>
                            </label>
                        </div>
                        <div className="">
                            <label for="categoria">
                            <span className="grid pl-3 justify-items-start label-text">Categoria</span>
                            <input list="categorias" id="categoria" name="Tipo_producto" placeholder="Ingresa la categoria del producto" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300"/>
                            <datalist id="categorias">
                                <option value="Comida" />
                                <option value="Articulos de aseo" />
                                <option value="Juguetes" />
                                <option value="Computacion" />
                            </datalist>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-end">
                    <button className="mx-5 mt-3 mb-1 p-2 px-6 border rounded-full btn azul transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">Añadir producto</button>
                    {error && (
                    <div className="bg-red-500 fixed text-white w-fit text-sm py-1 px-3 rounded-md mt-12">
                        {error}
                    </div>
                    )}
                    {successMessage && (
                        <div className="bg-green-500 fixed text-white w-fit text-sm py-1 px-3 rounded-md mt-12">
                        {successMessage}
                        </div>
                    )}
                </div>
            </motion.form>
        </div>
    )
}