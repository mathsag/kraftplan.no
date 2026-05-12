import Link from 'next/link';

const footerLinks = {
  Tjenester: [
    { name: 'Konsesjonssøknad', href: '/tjenester/konsesjonssoknad' },
    { name: 'Planendringssøknad', href: '/tjenester/planendringssoknad' },
    { name: 'Mulighetsstudie', href: '/tjenester/mulighetsstudie' },
    { name: 'Konsekvensutredning', href: '/tjenester/konsekvensutredning' },
    { name: 'Bistand i høringsprosess', href: '/tjenester/horing' },
    { name: 'Kommunale forhold', href: '/tjenester/kommunale-forhold' },
    { name: 'Droneoppdrag', href: '/tjenester/drone' },
  ],
  Selskapet: [
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Prosjekter', href: '/prosjekter' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-forest-900 text-bone-100">
      <div className="container-wide grid gap-16 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="font-display text-display-md leading-tight">
            La oss bygge<br />
            <em className="font-display-soft italic text-bone-200">noe varig</em> sammen.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center gap-3 border-b border-bone-100/30 pb-1 text-sm font-medium tracking-wide transition-colors hover:border-bone-100"
          >
            Ta kontakt
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-10 md:col-span-7 md:grid-cols-3">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-bone-300">
                {heading}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone-100/80 transition-colors hover:text-bone-50"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-bone-300">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-bone-100/80">
              <li>
                <a href="tel:+4748193444" className="transition-colors hover:text-bone-50">
                  +47 481 93 444
                </a>
              </li>
              <li>
                <a href="mailto:kasper.sagen@kraftplan.no" className="transition-colors hover:text-bone-50">
                  kasper.sagen@kraftplan.no
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=933873870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-bone-50"
                >
                  Org.nr 933 873 870
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-bone-50/10">
        <div className="container-wide flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-[0.18em] text-bone-300 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Kraftplan AS</span>
          <span className="font-display text-base normal-case tracking-normal text-bone-200/60">
            Effektiv planlegging, bærekraftig kraft
          </span>
        </div>
      </div>

      {/* Decorative lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bone-50/15 to-transparent"
      />
    </footer>
  );
}
