export default function StockUser() {
    return (
      <div className="overflow-x-auto">
        <div className="mt-[5%] flex items-center justify-center font-sans font-bold overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md my-6 rounded-lg">
              <table className="min-w-max w-full table-auto border border-gray-500 rounded-lg">
                <thead>
                  <tr className="azul text-white uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">ID</th>
                    <th className="py-3 px-6 text-center">Producto</th>
                    <th className="py-3 px-6 text-center">Cantidad</th>
                    <th className="py-3 px-6 text-center">Precio</th>
                    <th className="py-3 px-6 text-center">Oferta</th>
                    <th className="py-3 px-6 text-center">Tipo</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr>
                    <td className="py-3 px-6 text-center">1</td>
                    <td className="py-3 px-6 text-center">Producto A</td>
                    <td className="py-3 px-6 text-center">10</td>
                    <td className="py-3 px-6 text-center">$20.00</td>
                    <td className="py-3 px-6 text-center">Sí</td>
                    <td className="py-3 px-6 text-center">Tipo 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  