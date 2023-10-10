"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import fondo from "../img/InicioFondo.png"
import Image from "next/image"
import '@/app/styles/App.css'

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

      router.replace("stock-user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='gradiantAzul lblanca grid grid-cols-2 py-20 rounded-[67px] justify-items-center'>
      <div className='bg-black py-10 rounded-[67px] w-2/3 pl-9 pr-9'>
        <h1 className='pl-4 text-2xl font-bold'>Inicio de sesión</h1>
        <form onSubmit={handleSubmit} className='p-4 text-lg'>
          <div className='form-control p-2'> 
            <div className='py-4'>
              <label className="label">
              <span className="grid justify-items-start label-text">Usuario</span>
              </label>
              <input onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Ingresa tu nombre de usuario" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
            </div>        
            <label className="label">
            <span className="label-text">Contraseña</span>
            </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingrese su contraseña" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
            <Link className='text-sm' href="./register">¿Olvido su contraseña?</Link>
          </div>
          <div className='grid justify-items-end pt-20 my-3'>
            <button className="btn azul rounded-full p-1 px-6 border hover:border-sky-500">
              Iniciar Sesion
            </button>
            {error && (
              <div className="bg-red-500 fixed text-white w-fit text-sm py-1 px-3 rounded-md mt-12">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
      <div className='columns-1'>
        <Image src={fondo} alt="PaisajeFondo" className='rounded-l-[58px]'/>
      </div>
    </div>
  );
}
  /*
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            No tienes una Cuenta? <span className="underline">Registro</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
*/