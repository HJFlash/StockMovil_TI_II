import Navbar from "../../components/Navbar"

export default function UserLayout({children}){
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}