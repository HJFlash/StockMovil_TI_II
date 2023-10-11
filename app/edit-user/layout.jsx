import Navbar from "../../components/NavbarAdmin"
import Back from "../../components/Back"
import Link from "next/link"

export default function EditAdminLayout({children}){
    return (
        <>
            <nav>
                <Link href="../stock-admin"><Back /></Link>
                <Navbar/>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}