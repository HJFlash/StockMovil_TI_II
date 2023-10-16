import Back from "@/components/Back"
import Link from "next/link"

export default function NewAdminLayout({children}){
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