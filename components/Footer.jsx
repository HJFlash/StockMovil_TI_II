import LogoStock from "../img/LogoMini.png"
import Image from "next/image"
import Palabras from "./Palabras"

const Footer = () => {
  return (
    <footer className="bg-black font-sans font-bold py-6 fixed bottom-0 w-full">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
            <div className="col-span-1 max-sm:hidden flex justify-center items-center text-xl">
                <Palabras/>
            </div>
            <div className="col-span-1 p-4">
                <div className="bg-gray-300 rounded-full text-center">
                    <Image
                        src={LogoStock}
                        alt="Logo"
                        className="p-1 mx-auto h-16 w-auto"
                    />
                </div>
            </div>
            <div className="col-span-1 p-4 mx-auto flex items-center max-sm:hidden">
                <div>
                    <p>© 2023 StockMovil. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
