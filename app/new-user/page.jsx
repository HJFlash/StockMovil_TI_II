import user from "../../img/User.png"
import Image from "next/image"

export default function NewUser () {
    return(
        <div className="w-full App-fondo">
          <div className="flex items-center content-center justify-center w-2/3 h-screen mx-auto font-sans font-bold container-l">
            <div className="">
              <div className="bg-black lblanca p-3 rounded-[67px] justify-items-center pl-20 border-[#0071E3]">
                <h1 className="p-4 text-2xl">Crear usuario</h1>
                <div className="grid grid-cols-2 text-lg">
                  <div className="p-5">
                    <div className="grid grid-cols-2 p-3">
                      <div className="NOMBRE">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text">Nombre</span>
                          <input type="text" placeholder="Nombre" className="input w-4/5 max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
                        </label>
                      </div>
                      <div className="APELLIDO">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text">Apellido</span>
                        </label>
                        <input type="text" placeholder="Apellido" className="input w-4/5 max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="p-1">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text">Nombre de usuario</span>
                        </label>
                        <input type="text" placeholder="Usuario" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />
                      </div>
                      <div className="p-1">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text">Numero de documento</span>
                        </label>
                        <input type="text" placeholder="RUT" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />                        
                      </div>
                      <div className="p-1">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Correo electronico" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />                        
                      </div>
                      <div className="p-1">
                      <label className="label">
                        <span className="grid pl-3 justify-items-start label-text">Contraseña</span>
                      </label>
                      <input type="text" placeholder="Contraseña" className="input w-full max-w-xs rounded-full lnegra p-1 border-2 border-[#0071E3]" />                        
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 p-3">
                      <div className="">
                        <h1>Fecha de nacimiento</h1>
                        <input className="p-1 px-5 rounded-full azul" type="date" value="2017-06-01" /> 
                      </div>
                      <div>
                        <h1>Administrador</h1>
                        <input type="checkbox" className="toggle toggle-lg" checked />
                      </div>
                    </div>
                    <div className="grid py-2 justify-items-center">
                      <div className="flex items-stretch p-1 bg-white rounded-full">
                        <Image src={user} alt="Imagen de usuario" className="self-start p-1 border-white imgUs"/>
                      </div>
                    </div>
                    <div className='grid py-10 pt-10 pr-10 justify-items-end'>
                        <button className="p-1 px-6 border rounded-full btn azul">Crear usuario</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
