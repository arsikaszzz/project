"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/data/brand";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "Обо мне" },
  { href: "/programs", label: "Программы" },
  { href: "/method", label: "Метод" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/results", label: "Результаты" },
  { href: "/blog", label: "Блог" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="font-display text-2xl tracking-[-0.02em] text-text" onClick={closeMenu}>
          {brand.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary text-sm px-6 py-2.5"
          >
            Начать путь
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text"
          aria-label="Открыть меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-bg md:hidden"
            aria-modal="true"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col gap-8 text-2xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-text hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-12">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn btn-primary w-full py-4 text-lg"
                >
                  Начать путь
                </Link>
                <div className="mt-8 text-center text-sm text-text-dim">
                  {brand.email}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
