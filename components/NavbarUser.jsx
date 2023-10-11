import Link from "next/link"
import { FaMagnifyingGlass } from 'react-icons/fa6'


const NavbarUser = () => {
  return (
        <nav>
            <div className="bg-black font-sans font-bold py-10 top-0 w-full flex justify-center">
                <div className="bg-gray-300 w-[60%] grid grid-cols-6 gap-3 p-3 rounded-full">
                    <div className="col-span-2 relative">
                        <input 
                            className="placeholder:italic placeholder:text-slate-300 w-full h-full box-border azul p-2 pl-9 border-solid border border-gray-600 rounded-full focus:outline-none focus:border-sky-500"
                            placeholder="Search for a product ..."
                            type="text"
                            name="Search"  
                        />
                        <div className="absolute left-3 top-[50%] translate-y-[-50%]"><FaMagnifyingGlass/></div>
                    </div>
                    <div></div>
                    <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center hover:border-sky-500 shadow-md" href="../stock-user">
                        Inventario
                    </Link>
                    <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center hover:border-sky-500 shadow-md" href="../stock-user/categories">
                        Categorias
                    </Link>
                    <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center hover:border-sky-500 shadow-md" href="../stock-user/edit-perfil">
                        Editar Perfil
                    </Link>
                </div>
            </div>
        </nav>
  )
}

export default NavbarUser