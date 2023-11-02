import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import './styles/App.css'
export default async function Home() {
  
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