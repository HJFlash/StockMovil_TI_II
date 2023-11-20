import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { connectMongoDB } from "@/lib/mongodb";
import EsqProducto from "@/models/Producto";
import Borrar from "@/components/BorrarBD"
import { Suspense } from "react";

async function loadProductos() {
  await connectMongoDB();
  const productos = await EsqProducto.find()
  return productos 
}

export default async function StockUser() {
  const Productos = await loadProductos()
    return (
      <Suspense fallback={<div>Loading...</div>}>
      <div className="overflow-auto rounded-lg m-[7%] mt-[4%] border border-gray-500 shadow-md">
        <table className="w-full text-left text-sm azul">
          <thead>
            <tr className=" text-white uppercase">
              <th className="py-3 px-6 text-center">Codigo de barras</th>
              <th className="py-3 px-6 text-center">Producto</th>
              <th className="py-3 px-6 text-center">Cantidad</th>
              <th className="py-3 px-6 text-center">Precio</th>
              <th className="py-3 px-6 text-center">Oferta %</th>
              <th className="py-3 px-6 text-center">Precio Final</th>
              <th className="py-3 px-6 text-center">Categoria</th>
              <th className="py-3 text-center">
                <Link href="./stock-user/add_product" className="bg-[#1BDA00] text-white py-1 px-3 rounded-full text-center border-solid border border-white transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
                  AGREGAR PRODUCTO
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className="text-black bg-white">
            {Productos.map(Producto => (
            <tr className="border" key={Producto._id}>
              <td className="py-3 px-6 text-center">{Producto.CodigoBarras}</td>
              <td className="py-3 px-6 text-center">{Producto.Nombre}</td>
              <td className="py-3 px-6 text-center">{Producto.Cantidad}</td>
              <td className="py-3 px-6 text-center">$ {Producto.Precio}</td>
              <td className="py-3 px-6 text-center">{Producto.Oferta}%</td>
              <td className="py-3 px-6 text-center">$ {Producto.PrecioF}</td>
              <td className="py-3 px-6 text-center">{Producto.Tipo_producto}</td>
              <td className="text-center grid grid-cols-2">
                <Borrar ID={Producto._id.toHexString()} RUTA="Products"></Borrar>
                <Link href={`./stock-user/${Producto.CodigoBarras}`} className="py-3 px-3 text-[175%] text-gray-500 hover:text-gray-900"><FiEdit/></Link >
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>              
      </Suspense>
    );
  }
  
  
  
  