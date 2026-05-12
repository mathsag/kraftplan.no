'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Tjenester', href: '/tjenester' },
  { name: 'Prosjekter', href: '/prosjekter' },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Forsiden har lys tekst over video — andre sider har mørk på lys bakgrunn
  const isHome = pathname === '/';
  const onLightBg = !isHome || scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock scroll når menyen er åpen
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Tekstfarge basert på kontekst
  const textColor = onLightBg ? 'text-forest-900' : 'text-bone-50';
  const accentTextColor = onLightBg ? 'text-forest-700/70' : 'text-bone-100/70';
  const ctaBg = onLightBg ? 'bg-forest-900 text-bone-50 hover:bg-forest-700' : 'bg-bone-50 text-forest-950 hover:bg-bone-100';

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-forest-900/10 bg-bone-50/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <Link
            href="/"
            className={`group flex items-baseline gap-2.5 font-display text-2xl font-medium tracking-tight transition-colors duration-500 ${textColor}`}
            aria-label="Kraftplan – til forsiden"
          >
            <span className="relative">
              Kraftplan
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                  onLightBg ? 'bg-forest-700' : 'bg-bone-100'
                }`}
              />
            </span>
            <span className={`text-xs font-sans font-normal uppercase tracking-[0.18em] transition-colors duration-500 ${accentTextColor}`}>
              AS
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Hovedmeny">
            <ul className="flex items-center gap-10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`link-underline text-sm font-medium tracking-wide transition-colors duration-500 ${
                      onLightBg ? 'text-forest-900/85 hover:text-forest-900' : 'text-bone-50/90 hover:text-bone-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/kontakt"
                  className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${ctaBg}`}
                >
                  Få et tilbud
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={`md:hidden transition-colors duration-500 ${textColor}`}
            onClick={() => setOpen(true)}
            aria-label="Åpne meny"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 9h18M5 19h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-forest-900 text-bone-50">
          <div className="container-wide flex h-20 items-center justify-between">
            <span className="font-display text-2xl font-medium tracking-tight">
              Kraftplan{' '}
              <span className="text-xs font-sans font-normal uppercase tracking-[0.18em] text-bone-300">
                AS
              </span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Lukk meny">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7 7l14 14M21 7L7 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="container-wide mt-16" aria-label="Mobilmeny">
            <ul className="flex flex-col gap-2">
              {navigation.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-4xl font-medium tracking-tight"
                    style={{
                      animation: open
                        ? `fadeUp 0.6s ${idx * 80}ms backwards cubic-bezier(0.16, 1, 0.3, 1)`
                        : 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-12 border-t border-bone-50/15 pt-8 text-sm text-bone-100/80">
              <a href="tel:+4748193444" className="block py-1">
                +47 481 93 444
              </a>
              <a href="mailto:kasper.sagen@kraftplan.no" className="block py-1">
                kasper.sagen@kraftplan.no
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
