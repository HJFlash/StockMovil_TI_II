"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import fondo from "../img/InicioFondo.png"
import Image from "next/image"
import { AiOutlineUser } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import '@/app/styles/App.css'
import { motion } from "framer-motion"

export default function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [administrador, setAdmin] = useState("");
  const [error, setError] = useState("");

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
        return;
      }

      router.replace("stock-user");//stock-user
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <div className='gradiantAzul lblanca grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-20 rounded-[67px] justify-items-center '>
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
      className='bg-black py-10 sm:py-10 md:py-10 lg:py-10 xl:py-10 rounded-[67px] w-full sm:w-2/3 sm:pl-9 sm:pr-9 md:w-2/3 md:pl-9 md:pr-9 lg:w-2/3 lg:pl-9 lg:pr-9 xl:w-2/3 xl:pl-9 xl:pr-9 shadow-lg'>
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
                className="input w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-md xl:max-w-md rounded-r-full text-black p-1 border-2 pl-2 border-[#0071E3] "
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
              className="input w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-md xl:max-w-md rounded-r-full text-black p-1 border-2 pl-2 border-[#0071E3]"
            />
          </div>
          <Link className='text-sm' href="#">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className='grid justify-items-end sm:pt-20 my-3'>
          <button className="btn azul rounded-full p-1 px-6 border transition-transform transform translate-y-0 hover:scale-110 hover:bg-sky-500 duration-300">
            Iniciar Sesión
          </button>
          {error && (
            <div className="bg-red-500 fixed text-white w-fit text-sm py-1 px-3 rounded-md mt-6 sm:mt-12">
              {error}
            </div>
          )}
        </div>
      </form>
    </motion.div>
    <div className='hidden sm:block md:block lg:block xl:block'>
      <Image src={fondo} alt="PaisajeFondo" className='rounded-l-[58px] brightness-100 shadow-lg' />
    </div>
  </div>
  );
}