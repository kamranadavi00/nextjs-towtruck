

import "../styles/globals.css"
import Header from "../components/header"
import Footer from "../components/footer";
const RootLayout=({children})=>{
    return(
        <html lang="fa-IR">
            <body>
                <Header/>
                {children}
                <Footer/>
            </body> 
            
        </html>
    )
}
export default RootLayout;