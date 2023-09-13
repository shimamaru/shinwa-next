import "../styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Map from "../components/Map";

const montserrat = Montserrat({ subsets: ["latin"], variables: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        {/* <NavBar /> */}
        {/* <Logo /> */}
        <Map />
        {/* <Component {...pageProps} /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

// className={`${inter.variables} font-mont`}
