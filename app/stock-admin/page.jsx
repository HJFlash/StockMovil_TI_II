import { dbConnect } from "../utils/mongoose"
import Usuario from "../models/Usuario"

async function loadUsers() {
  dbConnect()
  const usuarios = await Usuario.find()
  return usuarios
}

export default async function StockAdmin() {
  const Usuarios = await loadUsers()
    return (
      <div className="overflow-x-auto ">
        <div className="mt-[5%] flex items-center justify-center font-sans font-bold overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md my-6">
              <table className="min-w-max w-full table-auto rounded-lg border border-gray-500">
                <thead>
                  <tr className="bg-blue-500 text-white uppercase text-sm leading-normal ">
                    <th className="py-3 px-6 text-center">Nombre de Usuario</th>
                    <th className="py-3 px-6 text-center">Nombre</th>
                    <th className="py-3 px-6 text-center">Numero de Documento</th>
                    <th className="py-3 px-6 text-center">Fecha de Nacimiento</th>
                    <th className="py-3 px-6 text-center">Administrador</th>
                    <th className="py-3 px-6 text-center">Email</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  {Usuarios.map(Usuario => (
                  <tr key={Usuario._id}>
                    <td className="py-3 px-6 text-center">{Usuario.usuario}</td>
                    <td className="py-3 px-6 text-center">{Usuario.nombre} {Usuario.apellido}</td>
                    <td className="py-3 px-6 text-center">{Usuario.n_documento}</td>
                    <td className="py-3 px-6 text-center">{Usuario.fec_Nacimiento}</td>
                    <td className="py-3 px-6 text-center">{Usuario.administrador ? "Sí" : "No"}</td>
                    <td className="py-3 px-6 text-center">{Usuario.email}</td>
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
  