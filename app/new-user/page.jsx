import user from "../../img/User.png"
import Image from "next/image"

export default function NewUser () {
    return(
        <div className="w-full App-fondo">
          <div className="flex items-center content-center justify-center mt-4 w-2/3 mx-auto font-sans font-bold container-l">
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
                        <input className="p-1 px-5 rounded-full azul" type="date" /> 
                      </div>
                      <div>
                        <h1>Administrador</h1>
                        <input
                        class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-white before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-blue-500 dark:after:bg-white dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault" />
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