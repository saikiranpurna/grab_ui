import React from "react";
import Link from "next/link";
import { FaGithub, FaSearch, FaBars } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 header-backdrop bg-white/80 dark:bg-black/80">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 group hover:scale-105 transition-all duration-200 focus-ring nav-link"
              aria-label="Grab UI home"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-lg logo-glow">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Grab UI
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Design System</p>
              </div>
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/docs", label: "Components", icon: "🧩" },
              { href: "/demo", label: "Examples", icon: "✨" },
              { href: "/typography", label: "Typography", icon: "�" },
              { href: "#blocks", label: "Blocks", icon: "�" },
              { href: "#templates", label: "Templates", icon: "�" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 nav-link focus-ring"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center gap-2">
                  <span className="text-sm transition-transform group-hover:scale-110 duration-200">
                    {item.icon}
                  </span>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Right: Search, Theme Toggle, GitHub, Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:block relative">
              <div className="relative group">
                <input
                  type="search"
                  placeholder="Search..."
                  className="search-input w-64 px-4 py-2 pl-10 rounded-xl border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              </div>
            </div>

            {/* Search button for mobile */}
            <button className="md:hidden p-2 rounded-xl border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-xl hover:scale-105 transition-all duration-200 focus-ring">
              <FaSearch className="text-foreground" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* GitHub */}
            <a
              href="https://github.com/saikiranpurna/grab_ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-xl hover:scale-105 transition-all duration-200 group focus-ring"
              aria-label="View on GitHub"
            >
              <FaGithub className="text-foreground group-hover:text-primary transition-colors duration-200" />
            </a>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2 rounded-xl border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-xl hover:scale-105 transition-all duration-200 focus-ring">
              <FaBars className="text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </header>
  );
}
