export default function NavbarUser(){
    return (
        <nav>
            <div className="bg-black font-sans font-bold py-10 absolute top-0 w-full flex justify-center">
                <div className="bg-gray-300 w-full mx-72 py-3 rounded-full">
                    <input 
                    type="search" 
                    className="bg-blue-500 w-[30%] mx-3 p-3 rounded-full leading-[1.6] focus:outline-none motioce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="&#128269; Search"
                    aria-label="Search" />
                </div>
            </div>
        </nav>
    )
}