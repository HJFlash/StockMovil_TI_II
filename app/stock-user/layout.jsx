import Navbar from "@/components/NavbarUser"
import Logout from "@/components/Logout"

export default function UserLayout({children}){
    return (
        <>
            <nav>
                <Logout/>
                <Navbar/>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}