import Navbar from "../../components/NavbarAdmin"

export default function AdminLayout({children}){
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