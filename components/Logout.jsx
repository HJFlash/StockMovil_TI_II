"use client";
import { BiLogIn } from 'react-icons/bi'
import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      signOut();
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="font-sans font-bold absolute top-0 right-0 bg-red-500 py-2 pr-5 pl-9 mt-14 mr-[7%] border-solid border border-red-600 rounded-full text-center transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:border-red-400 duration-300">
      Cerrar Sesión
      <div className='absolute left-3 top-[50%] translate-y-[-50%]'><BiLogIn /></div>
    </button>
  )
}