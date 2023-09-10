import React from 'react'
import Logo from "./img/logoStock.png"

export const StockFooter = () => {
  return (
    <footer className="bg-black py-6 absolute bottom-0 w-full text-white">
        
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 p-4">
            </div>
            <div class="col-span-1 p-4">
                <div className="bg-gray-300 rounded-full text-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="p-1 mx-auto h-14"
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
