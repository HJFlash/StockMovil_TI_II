import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function StockUser() {
    return (
      <div className="overflow-hidden rounded-lg m-[7%] border border-gray-500 shadow-md">
        <table className="w-full text-left text-sm azul">
          <thead>
            <tr className=" text-white uppercase">
              <th className="py-3 px-6 text-center">ID</th>
              <th className="py-3 px-6 text-center">Producto</th>
              <th className="py-3 px-6 text-center">Cantidad</th>
              <th className="py-3 px-6 text-center">Precio</th>
              <th className="py-3 px-6 text-center">Oferta</th>
              <th className="py-3 text-center">
                <Link href="" className="bg-blue-600 py-1 px-3 rounded-full text-center hover:border-sky-500 border-solid border border-gray-600">
                  AGREGAR PRODUCTO
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className="text-black bg-white">
            <tr className="border">
              <td className="py-3 px-6 text-center">1</td>
              <td className="py-3 px-6 text-center">Producto A</td>
              <td className="py-3 px-6 text-center">10</td>
              <td className="py-3 px-6 text-center">$20.00</td>
              <td className="py-3 px-6 text-center">0%</td>
              <td className="text-center">
                <button className="py-3 px-3 text-[175%] text-red-500 hover:text-red-900"><FiTrash2/></button >
                <button className="py-3 px-3 text-[175%] text-gray-500 hover:text-gray-900"><FiEdit/></button >
              </td>
            </tr>
          </tbody>
        </table>
      </div>              
    );
  }
  
  
  
  