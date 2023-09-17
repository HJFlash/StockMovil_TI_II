import Navbar from "../../components/NavbarUser"

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