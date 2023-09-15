import "../styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { GoogleMap, Marker } from "@react-google-maps/api";

const montserrat = Montserrat({ subsets: ["latin"], variables: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Map />
      </main>
    </>
  );
}
