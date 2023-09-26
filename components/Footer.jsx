import Logo from "../img/logoStock.png"
import Image from "next/image"

export default function StockFooter (){
  return (
    <footer className="bg-black font-sans font-bold py-6 absolute bottom-0 w-full text-white">
        
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 p-4">
            </div>
            <div class="col-span-1 p-4">
                <div className="bg-gray-300 rounded-full text-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="p-1 mx-auto h-14 w-auto"
                    />
                </div>
            </div>
            <div class="col-span-1 p-4 mx-auto flex items-center">
                <div>
                    <p>© 2023 StockMovil. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
