import Link from "next/link"
import Back from "../../../components/Back"

export default function EditLayout({children}){
    return(
        <>
            <Link href="../../stock-user"><Back /></Link>
            <main>
                {children}
            </main> 
        </>
    )
}