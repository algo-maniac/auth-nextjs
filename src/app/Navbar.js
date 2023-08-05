"use client";

import React from "react";
import Image from "next/image";
import { inherits } from "util";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-14 w-full border-current flex justify-around uppercase bg-slate-950 sticky top-0 z-10 font-serif">
      <div id="logo" className="basis-[10%] text-center pl-10">
        <div className="relative h-12 w-12 mt-1">
          <Image src="/images/logo.png" alt="My Image" fill={true} />
        </div>
      </div>
      <div id="center-comp" className="basis-[60%] text-center flex">
        <div
          id="Home"
          className="py-4 px-3 hover:underline-offset-1 hover:underline cursor-pointer"
        >
          <Link href="/">Home</Link>
        </div>
        <div
          id="group"
          className="py-4 px-3 hover:underline-offset-1 hover:underline cursor-pointer"
        >
          <Link href="#groups">Group</Link>
        </div>
        <div
          id="about"
          className="py-4 px-3 hover:underline-offset-1 hover:underline cursor-pointer"
        >
          About
        </div>
      </div>
      <div id="right-comp" className="basis-[30%] text-center flex pl-[12rem]">
        <div
          id="Home"
          className="py-3 px-3 hover:underline-offset-1 hover:underline normal-case cursor-pointer"
        >
          <Link href="/login">Login</Link>
        </div>
        <div
          id="group"
          className="py-3 hover:underline-offset-1 hover:underline normal-case cursor-pointer"
        >
          <Link href="/signup">Signup</Link>
        </div>
        <div
          id="profile name"
          className="py-4 pl-2 hover:underline-offset-1 hover:underline text-sm ml-4 normal-case"
        >
          Soumya
        </div>
        <div
          id="profile pic"
          className="rounded-full h-10 w-10 m-[4px] border-2"
        >
          {/* <Image src="/images/logo.png" alt="My Image" width={50} height={50} /> */}
        </div>
      </div>
    </div>
  );
}
