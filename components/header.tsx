"use client"
import { ButtonLink } from "@/common/button";
import { ThemeSwitcher } from "./theme-switcher";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../public/LOGO 3.png";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { _title: "Games", url: "/games" },
    { _title: "Leaderboard", url: "/leaderboard" },
    { _title: "Rewards", url: "/rewards" },
    { _title: "Community", url: "/community" },
    { _title: "About", url: "/about" },
  ];

  return (
    <header className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 bg-gradient-to-r from-background via-background to-background/95">
        <div className="container mx-auto flex w-full items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <ButtonLink
            unstyled
            className="flex items-center space-x-2 ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg transition-all duration-200 hover:scale-105"
            href="/"
          >
            <div className="relative">
              <Image
                src={logo}
                alt="Solvium Logo"
                priority
                height={40}
                width={40}
                className="drop-shadow-sm"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Solvium
            </span>
          </ButtonLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <ButtonLink
                key={item._title}
                unstyled
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg group"
                href={item.url}
              >
                <span className="relative z-10">{item._title}</span>
                <div className="absolute inset-0 bg-accent/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
              </ButtonLink>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>

            {/* CTA Button */}
            <ButtonLink
              className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 border-0"
              href="/games"
            >
              Play Now
            </ButtonLink>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <ButtonLink
                key={item._title}
                unstyled
                className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                href={item.url}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item._title}
              </ButtonLink>
            ))}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Appearance</span>
              <ThemeSwitcher />
            </div>
            <div className="pt-2">
              <ButtonLink
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg"
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
