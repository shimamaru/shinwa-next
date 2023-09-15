import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="flex items-center justify-center w-full mb-10 "></div>
        </Layout>
      </main>
    </>
  );
}
