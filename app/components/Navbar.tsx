"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <span className="text-lg font-bold text-white">P</span>
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold tracking-[0.18em] text-white">
                PANGASINAN
              </p>

              <p className="text-[10px] tracking-[0.35em] text-white/60">
                HERITAGE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-white transition hover:text-[#E9D8B4]"
            >
              Home
            </Link>

            <Link
              href="#destinations"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              Destinations
            </Link>

            <Link
              href="#about"
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0E2958]"
            >
              Explore
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#071A38]/95 p-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white"
              >
                Home
              </Link>

              <Link
                href="#destinations"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/70"
              >
                Destinations
              </Link>

              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/70"
              >
                About
              </Link>

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#F4E9D2] px-5 py-3 text-center text-sm font-bold text-[#0E2958]"
              >
                Explore Pangasinan
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}