import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
} from "../components/Icons";

//
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className="h-[1px] inline-block bg-black w-0 absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="flex items-center justify-between w-full px-24 py-8 ">
      <nav className="">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
        <CustomLink href="/articles" title="Articles" className="mr-4" />
      </nav>
      <nav className="flex space-x-4 item-center">
        <Link href="/" target={"_blank"}>
          <GithubIcon />
        </Link>
        <Link href="/" target={"_blank"}>
          <TwitterIcon />
        </Link>
        <Link href="/" target={"_blank"}>
          <LinkedInIcon />
        </Link>
        <Link href="/" target={"_blank"}>
          <PinterestIcon />
        </Link>
        <Link href="/" target={"_blank"}>
          <DribbbleIcon />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
