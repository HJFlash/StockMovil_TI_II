import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function StockAdmin() {
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
            <tr>
              <td className="py-3 px-6 text-center">user_10</td>
              <td className="py-3 px-6 text-center">User</td>
              <td className="py-3 px-6 text-center">11223344-5</td>
              <td className="py-3 px-6 text-center">01/01/2000</td>
              <td className="py-3 px-6 text-center">Sí</td>
              <td className="py-3 px-6 text-center">user@gmail.com</td>
              <td className="text-center grid grid-cols-2">
                <button className="py-3 px-3 text-[175%] text-red-500 hover:text-red-900"><FiTrash2/></button>
                <Link href="" className="py-3 px-3 text-[175%] text-gray-500 hover:text-gray-900"><FiEdit/></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  