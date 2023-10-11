"use client";
import {HiMiniBackspace} from 'react-icons/hi2'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Logout() {
  const { data: session } = useSession();
  return (
      <button onClick={() => signOut()} className="font-sans font-bold absolute top-0 right-0 bg-red-500 py-2 pr-5 pl-9 mt-14 mr-[7%] border-solid border border-red-600 rounded-full text-center hover:border-red-400" >
          Cerrar Sesion
          <div className='absolute left-3 top-[50%] translate-y-[-50%]'><HiMiniBackspace/></div>
      </button>
  )
}

//export default Logout