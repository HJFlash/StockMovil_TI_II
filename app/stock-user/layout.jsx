import Navbar from "../../components/NavbarUser"
import Logout from "../../components/Logout"
import Link from "next/link"

export default function UserLayout({children}){
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