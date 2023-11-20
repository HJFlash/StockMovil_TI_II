import LoginForm from "@/components/LoginForm";
import './styles/App.css'
export default async function Home() {
  
  return (
    <main className="App-fondo w-full">
      <div className='mx-auto font-sans font-bold container-i xl:mt-[10%] lg:mt-[18%] sm:mt-[25%] mt-[40%] sm:w-2/3'>
        <LoginForm></LoginForm>
      </div>
    </main>
  );
}
