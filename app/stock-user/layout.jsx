import Navbar from "../../components/Navbar-user"

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