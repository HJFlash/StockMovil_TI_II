import Navbar from "@/components/NavbarAdmin"
import Back from "@/components/Back"
import Link from "next/link"

export default function EditAdminLayout({children}){
    return (
        <>
            <nav>
                <Link href="./"><Back /></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}