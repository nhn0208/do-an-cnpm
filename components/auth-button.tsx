"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import { signIn,signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-10 px-6 mt-4 text-base rounded-full transition-colors duration-300 bg-white border-2 border-black text-black focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continue with Google</span>
    </button>
  );
}

export function GoogleSignOutButton() {
  const handleClick = () => {
    signOut();
  }

  return (
    <Button className="w-full bg-white dark:bg-slate-950 text-slate-950 dark:text-white hover:opacity-80 p-0 pl-2 flex justify-start " onClick={handleClick}>
      Sign Out
    </Button>
  )
}

export function CredentialsSignInButton() {
  const handleClick = () => {
    signIn();
  };

  return (
    <button
      onClick={() => handleClick()}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      {/* <Image src={githubLogo} alt="Github Logo" width={20} height={20} /> */}
      <span className="ml-4">Continue with Email</span>
    </button>
  );
}