import fondo from "../img/InicioFondo.png"
import Link from "next/link"
import Image from "next/image"
import './styles/App.css'

export default function LoginPage () {
    return( 
        <main className="App-fondo w-full">
          <div className='mx-auto font-sans font-bold container-i w-2/3'>
              <div className='gradiantAzul lblanca grid grid-cols-2 py-20 rounded-[67px] justify-items-center'>
                <div className='bg-black py-10 rounded-[67px] w-2/3 pl-9 pr-9'>
                  <h1 className='pl-4 text-2xl font-bold'>Inicio de sesión</h1>
                  <div className='p-4 text-lg'>
                    <div className='form-control p-2'> 
                      <div className='py-4'>
                        <label className="label">
                        <span className="grid justify-items-start label-text">Usuario</span>
                        </label>
                        <input type="text" placeholder="Ingresa tu nombre de usuario" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
                      </div>        
                      <label className="label">
                      <span className="label-text">Contraseña</span>
                      </label>
                      <input type="password" placeholder="Ingrese su contraseña" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
                      <Link className='text-sm' href="./register">¿Olvido su contraseña?</Link>
                    </div>
                    <div className='grid justify-items-end pt-20'>
                      <Link className="btn azul rounded-full p-1 px-6 border hover:border-sky-500" href="./stock-user">Iniciar Sesion</Link>
                    </div>
                  </div>
                </div>
                <div className='columns-1'>
                  <Image src={fondo} alt="PaisajeFondo" className='rounded-l-[58px]'/>
                </div>
              </div>
          </div>
        </main>  
        ) 
}
