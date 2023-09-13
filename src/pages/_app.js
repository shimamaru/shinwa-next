import "../styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import MapComponent from "../components/GoogleMap";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"], variables: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Maps JavaScript APIをロード */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCnn3vxfQBqMHWXgp4LzhnE2dHmAs4ZJbg&callback=initMap`}
          async
          defer
        ></script>
      </Head>
      <main>
        {/* <NavBar /> */}
        <Logo />
        <Component {...pageProps} />
        <MapComponent />
      </main>
      {/* <Footer /> */}
    </>
  );
}

// className={`${inter.variables} font-mont`}
