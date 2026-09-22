// src/components/shared/Footer.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3f2a20] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">BookNest</h2>

            <p className="mt-1 text-sm text-[#d8c4b5]">
              Discover stories. Explore worlds.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-[#eadfd5]">
            <Link href="/" className="transition hover:text-[#e6a77f]">
              Home
            </Link>

            <Link href="/books" className="transition hover:text-[#e6a77f]">
              Books
            </Link>

            <Link href="/about" className="transition hover:text-[#e6a77f]">
              About
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Copyright */}
        <p className="text-center text-sm text-[#bda99b]">
          © {new Date().getFullYear()} BookNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
