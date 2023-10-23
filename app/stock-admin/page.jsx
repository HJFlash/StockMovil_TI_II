import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { connectMongoDB } from "@/lib/mongodb";
import Usuario from "@/models/user"

async function loadUsers() {
  await connectMongoDB();
  const usuarios = await Usuario.find()
  return usuarios
}

export default async function StockAdmin() {
    const Usuarios = await loadUsers()
    return (

      <div className="overflow-hidden rounded-lg m-[7%] border border-gray-500 shadow-md">
        <table className="w-full text-left text-sm azul">
          <thead>
            <tr className="text-white uppercase">
              <th className="py-3 px-6 text-center">Nombre de Usuario</th>
              <th className="py-3 px-6 text-center">Nombre</th>
              <th className="py-3 px-6 text-center">Numero de Documento</th>
              <th className="py-3 px-6 text-center">Fecha de Nacimiento</th>
              <th className="py-3 px-6 text-center">Administrador</th>
              <th className="py-3 px-6 text-center">Email</th>
            </tr>
          </thead>
          <tbody className="text-black bg-white">
            {Usuarios.map(Usuario => (
            <tr className="border" key={Usuario._id}>
              <td className="py-3 px-6 text-center">{Usuario.usuario}</td>
              <td className="py-3 px-6 text-center">{Usuario.nombre} {Usuario.apellido}</td>
              <td className="py-3 px-6 text-center">{Usuario.n_documento}</td>
              <td className="py-3 px-6 text-center">{Usuario.fec_Nacimiento}</td>
              <td className="py-3 px-6 text-center">{Usuario.administrador ? "Si­" : "No"}</td>
              <td className="py-3 px-6 text-center">{Usuario.email}</td>
              <td className="text-center grid grid-cols-2">
                <button className="py-3 px-3 text-[175%] text-red-500 hover:text-red-900"><FiTrash2/></button>
                <Link href="./stock-admin/edit-user" className="py-3 px-3 text-[175%] text-gray-500 hover:text-gray-900"><FiEdit/></Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }