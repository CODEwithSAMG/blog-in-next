import Navbar from "@/components/Navbar";
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
    return <>
        <Navbar />
        <div className="content-wrapper">
            <Component {...pageProps} />
        </div>
    </>
}

export default MyApp;