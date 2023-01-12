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
    </>
  );
};

export default Home;
