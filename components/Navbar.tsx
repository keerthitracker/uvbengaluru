"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "VEHICLES", href: "/vehicles" },
  { label: "SERVICE", href: "/service" },
  { label: "FINANCE", href: "/finance" },
  { label: "TEST RIDE", href: "/test-ride" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 48);

      if (menuOpen) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 24) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-out ${
          headerVisible || menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-black px-4 py-2 text-center">
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "#A0A0A0",
            }}
            className="uppercase"
          >
            Visit us at Nagarbhavi&nbsp;&nbsp;&bull;&nbsp;&nbsp;10 AM-7 PM
            Daily&nbsp;&nbsp;&bull;&nbsp;&nbsp;
            <a
              href="tel:+919606955530"
              className="transition-colors hover:text-white"
            >
              96069 55530
            </a>
          </p>
        </div>

        <nav
          className="transition-all duration-300"
          style={{
            background: "#141414",
            borderBottom: scrolled
              ? "1px solid #2A2A2A"
              : "1px solid transparent",
            height: "64px",
          }}
        >
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/uv-logo.svg"
                alt="UV Bengaluru"
                width={180}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    color: pathname === link.href ? "#FFFFFF" : "#A0A0A0",
                    fontWeight: 400,
                  }}
                  className="uppercase transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/test-ride"
                style={{
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: "2px",
                  padding: "8px 16px",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
                className="uppercase transition-all hover:bg-white/10"
              >
                BOOK TEST RIDE
              </Link>
              <Link
                href="/contact"
                style={{
                  background: "#E8231A",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "2px",
                  padding: "8px 16px",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
                className="uppercase transition-all hover:bg-[#C41C14]"
              >
                VISIT SHOWROOM
              </Link>
            </div>

            <button
              className="z-50 flex flex-col gap-1.5 p-2 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 origin-center bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 origin-center bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "#0D0D0D" }}
      >
        <div className="mb-4">
          <Image
            src="/images/uv-logo.svg"
            alt="UV Bengaluru"
            width={180}
            height={32}
            className="h-8 w-auto opacity-70"
          />
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "28px",
              letterSpacing: "0.12em",
              fontWeight: 700,
              color: pathname === link.href ? "#FF3B3B" : "#FFFFFF",
            }}
            className="uppercase transition-colors hover:text-[#FF3B3B]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/test-ride"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "16px",
            background: "#E8231A",
            color: "#FFFFFF",
            borderRadius: "2px",
            padding: "14px 36px",
            fontSize: "16px",
            letterSpacing: "0.12em",
            fontWeight: 600,
          }}
          className="uppercase"
        >
          BOOK TEST RIDE
        </Link>
      </div>
    </>
  );
}
