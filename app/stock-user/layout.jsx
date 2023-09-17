import Navbar from "../../components/Navbar"

export default function UserLayout({children}){
    return (
        <html>
            <nav>
                <Navbar></Navbar>
            </nav>
            <>{children}</>
        </html>
    )
}