import "../styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import MapComponent from "../components/Map";

const montserrat = Montserrat({ subsets: ["latin"], variables: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <MapComponent />
      </main>
    </>
  );
}
