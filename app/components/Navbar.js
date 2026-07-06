"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Koszt auta",
    href: "/kalkulator",
  },
  {
    label: "OC",
    href: "/oc",
  },
  {
    label: "EV",
    href: "/ev",
  },
  {
    label: "Trasa",
    href: "/trasa",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-cyan-400 flex items-center justify-center font-bold text-slate-950">
              BR
            </div>

            <div>
              <p className="font-bold text-xl">
                BurnRate
              </p>

              <p className="text-slate-500 text-sm">
                Car cost calculators
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white text-2xl"
            aria-label="Otwórz menu"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-5 border-t border-slate-800 pt-5">
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl px-5 py-4 text-slate-300 font-semibold"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/metodologia"
                onClick={closeMenu}
                className="block bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl px-5 py-4 text-slate-300 font-semibold"
              >
                Metodologia
              </Link>

              <Link
                href="/o-projekcie"
                onClick={closeMenu}
                className="block bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl px-5 py-4 text-slate-300 font-semibold"
              >
                O projekcie
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}