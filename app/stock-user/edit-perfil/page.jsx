import user from "@/img/User.png"
import Image from "next/image"

export default function EditPerfil () {
    return(
        <div className="w-full App-fondo">
          <div className="flex items-center content-center justify-center mt-[5%] w-2/3 mx-auto font-sans font-bold container-l">
            <div className="">
              <div className="bg-black lblanca p-3 rounded-[67px] justify-items-center pl-20 border-2 border-[#0071E3]">
                <h1 className="p-4 text-2xl">Editar Perfil</h1>
                <div className="grid grid-cols-2 text-lg">
                  <div className="p-5">
                    <div className="p-3 m-3">
                      <div className="p-1">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text p-1">Cambiar correo electronico</span>
                        </label>
                        <input type="text" placeholder="user@gmail.com" className="input w-96 rounded-full lnegra p-1.5 px-5 border-2 border-[#0071E3]" />
                        <div className='grid pt-8 justify-items-end'>
                        <button className="p-1 px-6 border rounded-full btn azul hover:border-sky-500">Modificar</button>
                        </div>
                      </div>
                      <div className="p-1">
                        <label className="label">
                          <span className="grid pl-3 justify-items-start label-text p-1">Cambiar contraseña</span>
                        </label>
                        <input type="password" placeholder="" className="input w-96 rounded-full lnegra p-1.5 border-2 px-5 border-[#0071E3]" />
                        <div className='grid pt-8 justify-items-end'>
                        <button className="p-1 px-6 border rounded-full btn azul hover:border-sky-500">Modificar</button>
                        </div>                        
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="grid py-2 justify-items-center">
                      <div className="flex items-stretch p-1 bg-white rounded-full">
                        <Image src={user} alt="Imagen de usuario" className="self-start p-1 border-white imgUs"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}