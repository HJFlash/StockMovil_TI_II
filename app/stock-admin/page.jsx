"use client";

import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { connectMongoDB } from "@/lib/mongodb";
import Usuario from "@/models/user"
import { Suspense } from "react";
import Borrar from "@/components/BorrarBD";
import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";

export default function StockAdmin({ searchValue }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      await connectMongoDB();
      const loadedUsuarios = await Usuario.find();

      // Filtra la lista de usuarios según el valor de búsqueda
      const filteredUsuarios = loadedUsuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(searchValue.toLowerCase())
      );

      setUsuarios(filteredUsuarios);
    };

    loadUsers();
  }, [searchValue]); // Ejecuta la carga de usuarios cuando cambie el valor de búsqueda

    return (
      <Suspense fallback={<div>Loading...</div>}>
      <div className="overflow-hidden rounded-lg m-[7%] mt-[4%] border border-gray-500 shadow-md">
        <table className="w-full text-left text-sm azul">
          <thead>
            <tr className="text-white uppercase">
              <th className="py-3 px-6 text-center">Nombre de Usuario</th>
              <th className="py-3 px-6 text-center">Nombre Apellido</th>
              <th className="py-3 px-6 text-center">Numero de Documento</th>
              <th className="py-3 px-6 text-center">Fecha de Nacimiento</th>
              <th className="py-3 px-6 text-center">Administrador</th>
              <th className="py-3 px-6 text-center">Email</th>
            </tr>
          </thead>
          <tbody className="text-black bg-white">
            {usuarios.map(Usuario => (
            <tr className="border" key={Usuario._id}>
              <td className="py-3 px-6 text-center">{Usuario.usuario}</td>
              <td className="py-3 px-6 text-center">{Usuario.nombre} {Usuario.apellido}</td>
              <td className="py-3 px-6 text-center">{Usuario.n_documento}</td>
              <td className="py-3 px-6 text-center">{Usuario.fec_Nacimiento}</td>
              <td className="py-3 px-6 text-center">{Usuario.administrador ? "Si" : "No"}</td>
              <td className="py-3 px-6 text-center">{Usuario.email}</td>
              <td className="text-center grid grid-cols-2">
                <Borrar ID={Usuario._id.toHexString()} RUTA="Users"></Borrar>
                <Link href="./stock-admin/edit-user" className="py-3 px-3 text-[175%] text-gray-500 hover:text-gray-900"><FiEdit/></Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      </Suspense>
    );
  }