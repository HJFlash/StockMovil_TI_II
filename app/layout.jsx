import { Inter } from "next/font/google";
import Footer from "../components/Footer"
import "./styles/globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"]
}) 

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
