"use client"
import { ButtonLink } from "@/common/button";
import { ThemeSwitcher } from "./theme-switcher";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { _title: "Problem", url: "/#problem" },
    { _title: "Solution", url: "/#solution" },
    { _title: "Metrics", url: "/#metrics" },
    { _title: "Revenue", url: "/#revenue" },
    { _title: "Vision", url: "/#vision" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("/#")) {
      e.preventDefault();
      const id = url.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[110] flex w-full flex-col transition-all duration-300 ${scrolled ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="flex h-16">
        <div className="container mx-auto flex w-full items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <ButtonLink
            unstyled
            className="flex items-center space-x-2 ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg transition-all duration-200 hover:scale-105"
            href="/"
            onClick={(e) => scrollToSection(e, "/#home")}
          >
            <div className="relative">
              <Image
                src="/images/Logo.svg"
                alt="Solvium Logo"
                priority
                height={40}
                width={40}
                className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>
            <span className="text-2xl font-bold text-white font-[family-name:var(--font-pixelify)] tracking-tight">
              Solvium
            </span>
          </ButtonLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item._title}
                href={item.url}
                onClick={(e) => scrollToSection(e, item.url)}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-200 rounded-lg group"
              >
                <span className="relative z-10">{item._title}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              {/* <ThemeSwitcher /> */}
            </div>

            {/* CTA Button */}
            <ButtonLink
              className="hidden md:inline-flex bg-white text-black hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 border-0 font-bold rounded-full px-6"
              href="/games"
            >
              Play Now
            </ButtonLink>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white/70 hover:text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl">
          <nav className="container mx-auto px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item._title}
                href={item.url}
                onClick={(e) => scrollToSection(e, item.url)}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-[family-name:var(--font-pixelify)]"
              >
                {item._title}
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-white/10">
              <ButtonLink
                className="w-full bg-white text-black hover:bg-slate-200 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                href="/games"
                onClick={() => setMobileMenuOpen(false)}
              >
                Play Now
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
