import Navbar from "../../components/NavbarAdmin"
import Logout from "../../components/Logout"
import Link from "next/link"

export default function AdminLayout({children}){
    return (
        <>
            <nav>
                <Link href="../"><Logout/></Link>
                <Navbar/>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}