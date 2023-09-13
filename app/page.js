import Image from 'next/image'
import './App.css'

export default function Home() {
  return (
    <body>
    <main className='mx-auto font-sans font-bold container-i w-2/3'>
      <div className=''>
        <div className='azul lblanca grid grid-cols-2 py-20 rounded-[67px] justify-items-center'>
          <div className='bg-black py-10 rounded-[67px] w-2/3 pl-9 pr-9'>
            <h1 className='pl-4 text-xl font-bold'>Inicio de sesión</h1>
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
                <a className='text-sm' href="URL_del_enlace">¿Olvido su contraseña?</a>
              </div>
              <div className='grid justify-items-end pt-20'>
                <button className="btn azul rounded-full p-1 px-6 border">Iniciar Sesion</button>
              </div>
            </div>
          </div>
          <div className='columns-1'>
          </div>
        </div>
      </div>
    </main>

  </body> )
}
