"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";



export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);


  return (
    <>
      <SignInModal />
      <div
        className={`relative top-0  w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-start w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Omnind logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Omnind</p>
          </Link>
          <div style={{ width: '0.3in' }}></div>
          <Link href="/Capabilities">
            <p className="text-black bg-transparent border-none p-1.5 px-4 text-lg transition-all hover:text-black">
              Capabilities
            </p>
          </Link>
          <Link href="/Alliances">
            <p className="text-black bg-transparent border-none p-1.5 px-4 text-lg transition-all hover:text-black">
              Alliances
            </p>
          </Link>
          <Link href="/Sustainability">
            <p className="text-black bg-transparent border-none p-1.5 px-4 text-lg transition-all hover:text-black">
              Sustainability
            </p>
          </Link>
          <Link href="/AboutUs">
            <p className="text-black bg-transparent border-none p-1.5 px-4 text-lg transition-all hover:text-black">
              About Us
            </p>
          </Link>
          <div className="flex justify-start">
          </div>
        </div>
      </div>
    </>
  );
}
