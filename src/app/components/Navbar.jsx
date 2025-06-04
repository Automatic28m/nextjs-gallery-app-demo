"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-2 max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-3 text-xl">
          <Image src="/StudioSolstice.png" width={60} height={60} alt="Logo" />
          {/* <h1 className="font-durer">Studio Solstice</h1> */}
        </Link>
        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-900 mb-1 transition-all ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-slate-900 mb-1 transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-all ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* Desktop menu */}
        <ul className="hidden sm:flex flex-row gap-10 text-slate-900 items-center font-durer text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="sm:hidden flex flex-col gap-4 px-6 pb-4 text-slate-900 font-durer text-lg bg-white shadow mt-6">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
