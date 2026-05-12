import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { tjenesterInnhold } from '@/lib/tjenester-innhold';

export const metadata = {
  title: 'Tjenester',
  description:
    'Konsesjonssøknader, mulighetsstudier, konsekvensutredninger og mer for småkraftverk.',
};

export default function TjenesterPage() {
  // Sortert etter rekkefolge
  const tjenester = [...tjenesterInnhold].sort((a, b) => a.rekkefolge - b.rekkefolge);

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
              Tjenester
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-[16ch] font-display text-display-xl font-medium text-forest-950">
              Komplette<br />
              <em className="font-display-soft italic text-glacier-600">leveranser</em> for småkraft.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-forest-900/80">
              Vi følger prosjektet ditt fra første mulighetsstudie til ferdig konsesjon. Hver
              tjeneste kan leveres frittstående — eller som del av et samlet løp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-24">
            {tjenester.map((t, idx) => (
              <Reveal key={t.slug} delay={(idx % 2) * 100}>
                <Link href={`/tjenester/${t.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-forest-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.bilde}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest-950/30" />
                    <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.18em] text-bone-50/80">
                      {String(t.rekkefolge).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-3xl font-medium text-forest-950 transition-colors group-hover:text-glacier-700 md:text-4xl">
                      {t.tittel}
                    </h2>
                    <span
                      aria-hidden
                      className="shrink-0 text-forest-900/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-forest-900"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-forest-900/75 leading-relaxed">
                    {t.ingress}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <Reveal>
            <div className="border-y border-forest-900/15 py-16">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="font-display text-display-md font-medium leading-[1.05] text-forest-950">
                    Ikke sikker på hva du trenger?
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-lg leading-relaxed text-forest-900/80">
                    Vi tar gjerne en uformell prat for å hjelpe deg å finne ut hvilke tjenester som
                    passer for ditt prosjekt.
                  </p>
                  <Link
                    href="/kontakt"
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700"
                  >
                    Ta kontakt
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
