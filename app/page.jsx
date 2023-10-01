import fondo from "../img/InicioFondo.png"
import LoginForm from "@/components/LoginForm";
import Link from "next/link"
import Image from "next/image"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");//abre pagina central

  return (
<main className="App-fondo w-full">
          <div className='mx-auto font-sans font-bold container-i w-2/3'>
              <div className='gradiantAzul lblanca grid grid-cols-2 py-20 rounded-[67px] justify-items-center'>
                <div className='bg-black py-10 rounded-[67px] w-2/3 pl-9 pr-9'>
                  <h1 className='pl-4 text-2xl font-bold'>Inicio de sesión</h1>
                  <div className='p-4 text-lg'>
                    <div className='form-control p-2'> 
                      <LoginForm></LoginForm>
                      <label className="label">
                      </label>
                    </div>
                    <div className='grid justify-items-end pt-20'>
                    </div>
                  </div>
                </div>
                <div className='columns-1'>
                  <Image src={fondo} alt="PaisajeFondo" className='rounded-l-[58px]'/>
                </div>
              </div>
          </div>
        </main>  
  );
}
