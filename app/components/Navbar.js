import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center font-bold text-slate-950">
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
          <Link href="/kalkulator" className="hover:text-cyan-400 transition">
            Koszt auta
          </Link>

          <Link href="/oc" className="hover:text-cyan-400 transition">
            OC
          </Link>

          <Link href="/ev" className="hover:text-cyan-400 transition">
            EV
          </Link>

          <Link href="/trasa" className="hover:text-cyan-400 transition">
            Trasa
          </Link>

          <Link href="/blog" className="hover:text-cyan-400 transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}