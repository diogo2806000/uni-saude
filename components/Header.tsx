'use client';

import { useState } from 'react';
import { HeartPulse, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Especialidades', href: '#services' },
  { label: 'Corpo Clínico', href: '#team' },
  { label: 'Contato', href: '#contact' }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-soft">
      <div className="section-container flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 text-brand-600 font-semibold text-lg" aria-label="Uni Saúde logo">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 shadow-sm">
            <HeartPulse className="h-5 w-5" />
          </div>
          Uni Saúde
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-brand-600">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/5532999513176"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
            aria-label="Agendar agora via WhatsApp"
          >
            <Phone className="h-4 w-4" />
            Agendar Agora
          </a>
          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-600 sm:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="sm:hidden border-t border-slate-200 bg-white/95 shadow-soft">
          <nav className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5532999513176"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
              aria-label="Agendar agora via WhatsApp"
            >
              <Phone className="h-4 w-4" />
              Agendar Agora
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
