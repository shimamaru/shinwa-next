import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center font-light border-t-2 border-gray-400 border-solid w-fulltext-sm">
        <Layout className="flex items-center justify-center w-full py-8 text-center">
          <Link href={"/"}>
            {new Date().getFullYear()} &copy; Rights CodeBucks Say Hello
          </Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
