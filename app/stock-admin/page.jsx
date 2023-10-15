import { dbConnect } from "../utils/mongoose";
import EsqUsuario from "../models/Usuario";

async function loadAllUsers() {
  dbConnect()
  const usuarios = await EsqUsuario.find()
  return usuarios 
}

export default async function StockUser() {
  const Usuarios = await loadAllUsers()
    return (
      <div className="overflow-x-auto">
        <div className="mt-[5%] flex items-center justify-center font-sans font-bold overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md my-6 rounded-lg">
              <table className="min-w-max w-full table-auto border border-gray-500 rounded-lg">
                <thead>
                  <tr className="azul text-white uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">Usuario</th>
                    <th className="py-3 px-6 text-center">Nombre</th>
                    <th className="py-3 px-6 text-center">Apellido</th>
                    <th className="py-3 px-6 text-center">Nro_Documento</th>
                    <th className="py-3 px-6 text-center">Email</th>
                    <th className="py-3 px-6 text-center">Fec_nacimiento</th>
                    <th className="py-3 px-6 text-center">Admin</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  {Usuarios.map(Usuario => (
                  <tr key={Usuario._id}>
                    <td className="py-3 px-6 text-center">{Usuario.Usuario}</td>
                    <td className="py-3 px-6 text-center">{Usuario.Nombre}</td>
                    <td className="py-3 px-6 text-center">{Usuario.Apellido}</td>
                    <td className="py-3 px-6 text-center">${Usuario.Nro_Documento}</td>
                    <td className="py-3 px-6 text-center">{Usuario.Email}</td>
                    <td className="py-3 px-6 text-center">{Usuario.Fec_nacimiento}</td>
                    <td className="py-3 px-6 text-center">{Usuario.Admin}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  