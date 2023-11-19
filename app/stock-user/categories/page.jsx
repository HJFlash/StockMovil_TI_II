export default function CategoriesStock() {
    return (
      <div className="overflow-x-auto ">
        <div className="mt-[5%] flex items-center justify-center font-sans font-bold overflow-hidden">
          <div className="w-full lg:w-5/6 flex items-center justify-center">
            <div className="grid content-center grid-cols-2 w-96 gap-4">
                <button className="azul rounded-[40px] border border-black py-20 hover:border-sky-500 ">Categoria 1</button>
                <button className="azul rounded-[40px] border border-black py-20 hover:border-sky-500">Categoria 2</button>
                <button className="azul rounded-[40px] border border-black py-20 hover:border-sky-500">Categoria 3</button>
                <button className="plomo rounded-[40px] border border-black py-16 text-3xl hover:border-sky-500">+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }