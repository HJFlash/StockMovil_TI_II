export default function StockAdmin() {
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
                  <tr>
                    <td className="py-3 px-6 text-center">user_10</td>
                    <td className="py-3 px-6 text-center">User</td>
                    <td className="py-3 px-6 text-center">11223344-5</td>
                    <td className="py-3 px-6 text-center">01/01/2000</td>
                    <td className="py-3 px-6 text-center">Sí</td>
                    <td className="py-3 px-6 text-center">user@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  