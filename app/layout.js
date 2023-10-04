import { AuthProvider } from "./Providers";
import { Inter } from "next/font/google";
import Footer from "../components/Footer"
import "./styles/globals.css"
import "./styles/App.css"

export const metadata = {
  title: "StockMovil",
    description: "nsnanan",
};
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"]
}) 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <AuthProvider>{children}</AuthProvider>
        <Footer></Footer>
      </body>
    </html>
  );
}
