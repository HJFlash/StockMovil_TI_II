import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import fondo from "../img/InicioFondo.png"
import Link from "next/link"
import Image from "next/image"
import './styles/App.css'
export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/stock-admin");//stock-user
  return (
    <main className="App-fondo w-full">
      <div className='mx-auto font-sans font-bold container-i w-2/3'>
        <LoginForm></LoginForm>
      </div>
    </main>
  );
}
/*
  return (
        <main className="App-fondo w-full">
          <div className='mx-auto font-sans font-bold container-i w-2/3'>
              <div className='gradiantAzul lblanca grid grid-cols-2 py-20 rounded-[67px] justify-items-center'>
                <LoginForm></LoginForm>
                <div className='columns-1'>
                  <Image src={fondo} alt="PaisajeFondo" className='rounded-l-[58px]'/>
                </div>
              </div>
          </div>
        </main>  
  );
}
*/