"use client";
//import { redirect } from "next/navigation";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import fondo from "../img/InicioFondo.png"
import Image from "next/image"
import { AiOutlineUser } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import '@/app/styles/App.css'
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"

export default function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { data: session} = useSession();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        usuario,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Usuario invalido");
        setSuccessMessage(""); //Limpia en caso de que haya un error anteriormente
        return;
      }
      if (session && session.user._doc.administrador) {//redireccionamiento
        //console.log("administrador");
        router.replace("/stock-admin");
        setSuccessMessage("Se ha iniciado sesión correctamente");
      } else if (session && !session.user._doc.administrador) {
        //console.log("Usuario: ", session.user._doc.administrador);
        router.replace("/stock-user");
        setSuccessMessage("Se ha iniciado sesión correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <div className='gradiantAzul lblanca grid grid-cols-1 xl:grid-cols-2 xl:py-20 rounded-[67px] justify-items-center'>
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className='bg-black p-9 rounded-[67px] w-full xl:w-2/3 shadow-lg'>
      <h1 className='pl-4 text-2xl font-bold'>Inicio de sesión</h1>
      <form onSubmit={handleSubmit} className='p-4 text-lg'>
        <div className='form-control p-2'>
          <div className='py-4'>
            <label className="label">
              <span className="grid justify-items-start label-text">Usuario</span>
            </label>
            <div className="flex transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300">
              <div className="azul rounded-l-full px-2 pt-3 pl-3">
              <AiOutlineUser/>
              </div>
              <input
                onChange={(e) => setUsuario(e.target.value)}
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                className="input w-full max-w-xs rounded-r-full focus:outline-none text-black p-1 border-2 pl-2 border-[#0071E3] "
              />
            </div>
          </div>
          <label className="label">
            <span className="label-text">Contraseña</span>
          </label>
          <div className="flex transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300">
              <div className="azul rounded-l-full px-2 pt-3 pl-3">
              <GiPadlock/>
              </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Ingresa tu contraseña"
              className="input w-full max-w-xs rounded-r-full focus:outline-none text-black p-1 border-2 pl-2 border-[#0071E3]"
            />
          </div>
          <Link className='text-sm' href="#">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className='grid justify-items-end my-3'>
          <button className="btn azul rounded-full p-1 px-6 border transition-transform transform translate-y-0 hover:scale-110 hover:bg-sky-500 duration-300">
          Iniciar Sesión
          </button>
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
      </form>
    </motion.div>
    <div className='hidden xl:flex'>
      <Image src={fondo} alt="PaisajeFondo" className='rounded-l-[58px] brightness-100 shadow-lg' />
    </div>
  </div>
  );
}