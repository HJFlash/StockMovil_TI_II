export default function Editproduct(){
    return (
        <div className="App-fondo flex items-center content-center justify-center mt-[8%] mx-auto font-sans font-bold container-l">
            <form className="bg-black lblanca p-8 pl-10 rounded-[67px] justify-items-center border-2 border-[#0071E3]">
                <h1 className="text-2xl mb-3 ml-5">Editar Producto</h1>
                <div className="grid grid-cols-2 grid-rows-2 p-5 gap-10">
                    <div>
                        <div>Nombre</div>
                        <input type="text" placeholder="Nombre" className="input w-96 rounded-full lnegra p-1.5 border-2 border-[#0071E3]" />
                    </div>
                    <div>
                    <div>Precio</div>
                        <input type="text" placeholder="Precio" className="input w-96 rounded-full lnegra p-1.5 border-2 border-[#0071E3]" />
                    </div>
                    <div>
                    <div>Cantidad</div>
                        <input type="text" placeholder="Cantidad" className="input w-96 rounded-full lnegra p-1.5 border-2 border-[#0071E3]" />
                    </div>
                    <div>
                    <div>Oferta</div>
                        <input type="text" placeholder="Oferta" className="input w-96 rounded-full lnegra p-1.5 border-2 border-[#0071E3]" />
                    </div>
                </div>
                <button className="mx-5 mt-3 p-1 px-6 border rounded-full btn azul hover:border-sky-500">Modificar</button>
            </form>
        </div>
    )
}