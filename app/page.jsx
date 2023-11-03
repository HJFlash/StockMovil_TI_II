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
