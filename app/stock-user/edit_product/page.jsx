export default function Editproduct(){
    return (
        <div className="App-fondo flex items-center content-center justify-center mt-[3%] mx-auto font-sans font-bold container-l">
            <form className="bg-black lblanca p-8 pl-10 rounded-[67px] justify-items-center border-2 border-[#0071E3]">
                <h1 className="text-2xl mb-3 ml-5">Editar producto</h1>
                <div className="grid grid-cols-2 p-5 w-full">
                    <div className="p-3">
                        <div className="pb-2 w-96">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Codigo de barras</span>
                            <input type="number" name="codigo_de_barras" min="0" placeholder="Ingresa Codigo de barras" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autocomplete="off"/>
                            </label>
                        </div>
                        <div className="pb-2">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Nombre</span>
                            <input type="text" name="nombre_producto" placeholder="Ingresa nombre de producto" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autocomplete="off"/>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Cantidad</span>
                            <input type="number" name="cantidad_producto" placeholder="Ingresa cantidad" min="0" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autocomplete="off"/>
                            </label>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="pb-2">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Precio</span>
                            <input type="number" name="precio" placeholder="Ingresa precio" min="0" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autocomplete="off"/>
                            </label>
                        </div>
                        <div className="pb-2">
                            <label className="label">
                            <span className="grid pl-3 justify-items-start label-text">Oferta</span>
                            <input type="number" name="oferta" placeholder="Ingresa oferta" min="0" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300" autocomplete="off"/>
                            </label>
                        </div>
                        <div className="">
                            <label for="categoria">
                            <span className="grid pl-3 justify-items-start label-text">Categoria</span>
                            <input list="categorias" id="categoria" name="categoria" placeholder="Ingresa la categoria del producto" className="input w-4/5 max-w-xs focus:outline-none rounded-full lnegra p-1 py-1.5 px-5 border-2 border-[#0071E3] transition-transform transform translate-y-0 hover:scale-110 hover:border-sky-500 duration-300"/>
                            <datalist id="categorias">
                                <option value="Comida" />
                                <option value="Articulos de aseo" />
                                <option value="Juguetes" />
                                <option value="Computacion" />
                            </datalist>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-end">
                    <button className="mx-5 mt-3 p-2 px-6 border rounded-full btn azul transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">Modificar</button>
                </div>
            </form>
        </div>
    )
}