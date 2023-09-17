import Link from "next/link"

export default function NavbarUser(){
    return (
        <nav>
            <div className="bg-black font-sans font-bold py-10 top-0 w-full flex justify-center">
                <div className="bg-gray-300 w-[60%] grid grid-cols-6 gap-3 p-3 rounded-full">
                    <div className="col-span-2 relative">
                        <input 
                            className="placeholder:italic placeholder:text-slate-300 w-full h-full box-border bg-blue-500 p-3 pl-10 border-solid border border-gray-600 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                            placeholder="Search for a product ..."
                            type="text"
                            name="Search"  
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute w-5 h-5 left-3 top-[50%] translate-y-[-50%]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div></div>
                    <Link className="bg-blue-500 p-3 border-solid border border-gray-600 rounded-full text-center hover:border-sky-500" href="">
                        Inventario
                    </Link>
                    <Link className="bg-blue-500 p-3 border-solid border border-gray-600 rounded-full text-center hover:border-sky-500" href="">
                        Categorias
                    </Link>
                    <Link className="bg-blue-500 p-3 border-solid border border-gray-600 rounded-full text-center hover:border-sky-500" href="">
                        Editar Perfil
                    </Link>
                </div>
            </div>
        </nav>
    )
}