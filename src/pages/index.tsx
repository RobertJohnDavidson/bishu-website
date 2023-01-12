import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Header from "../components/Header";

const navigation = [
  { name: "Merch", href: "https://welcome2bishu-shop.fourthwall.com/" },
  { name: "Contact", href: "" },
];
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="f"></div>
      <main className="flex w-full flex-1 flex-col items-center justify-center gap-5 p-4 px-20 text-center">
        <iframe
          className="br-12"
          src="https://open.spotify.com/embed/artist/1DzQInbDVhE9Lh5s6T0DUL?utm_source=generator&theme=0"
          width="100%"
          height="380"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </main>
    </>
  );
};

export default Home;
