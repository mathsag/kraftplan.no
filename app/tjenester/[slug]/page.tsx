import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { getTjeneste, tjenesterInnhold } from '@/lib/tjenester-innhold';

type Params = { slug: string };

export async function generateStaticParams() {
  return tjenesterInnhold.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const t = getTjeneste(slug);
  return {
    title: t?.tittel ?? 'Tjeneste',
    description: t?.ingress,
  };
}

export default async function TjenestePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tjeneste = getTjeneste(slug);
  if (!tjeneste) notFound();

  // Finn forrige og neste tjeneste for navigasjon
  const sortert = [...tjenesterInnhold].sort((a, b) => a.rekkefolge - b.rekkefolge);
  const idx = sortert.findIndex((t) => t.slug === slug);
  const forrige = idx > 0 ? sortert[idx - 1] : null;
  const neste = idx < sortert.length - 1 ? sortert[idx + 1] : null;

  return (
    <>
      {/* HERO med bilde */}
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tjeneste.bilde}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 via-forest-950/30 to-forest-950/85" />

        <div className="container-wide relative flex h-full flex-col justify-end pb-16 pt-32 md:pb-20">
          <Reveal>
            <Link
              href="/tjenester"
              className="link-underline text-xs font-medium uppercase tracking-[0.22em] text-bone-100/85"
            >
              ← Alle tjenester
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-bone-100/70">
              Tjeneste {String(tjeneste.rekkefolge).padStart(2, '0')}
            </p>
            <h1 className="mt-3 max-w-[18ch] font-display text-display-xl font-medium text-bone-50">
              {tjeneste.tittel}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INGRESS + BESKRIVELSE */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="max-w-3xl font-display text-display-sm font-medium leading-[1.2] text-forest-950">
              {tjeneste.ingress}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 grid gap-12 border-t border-forest-900/15 pt-16 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  Om tjenesten
                </p>
              </div>
              <div className="md:col-span-9">
                <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-forest-900/85">
                  {tjeneste.beskrivelse.split('\n\n').map((avsnitt, i) => (
                    <p key={i}>{avsnitt}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HVA INKLUDERER DETTE — leveranser */}
      <section className="bg-bone-100/50 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
                  Hva inkluderer dette?
                </p>
                <h2 className="mt-6 font-display text-display-md font-medium leading-[1.1] text-forest-950">
                  Konkrete<br />
                  <em className="font-display-soft italic text-glacier-600">leveranser</em>.
                </h2>
              </div>
              <div className="md:col-span-8">
                <ul className="border-t border-forest-900/15">
                  {tjeneste.leveranser.map((leveranse, i) => (
                    <Reveal key={i} delay={i * 60} as="li">
                      <div className="flex items-baseline gap-6 border-b border-forest-900/15 py-5">
                        <span className="font-mono text-xs text-forest-900/40 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-lg text-forest-900/90">{leveranse}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROSESS — kun hvis definert */}
      {tjeneste.prosess && tjeneste.prosess.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <Reveal>
              <div className="grid gap-12 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-4">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                    <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
                    Vår prosess
                  </p>
                  <h2 className="mt-6 font-display text-display-md font-medium leading-[1.1] text-forest-950">
                    Slik <em className="font-display-soft italic text-glacier-600">jobber</em> vi.
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <ol className="space-y-12">
                    {tjeneste.prosess.map((p, i) => (
                      <Reveal key={i} delay={i * 100} as="li">
                        <div className="grid grid-cols-12 items-baseline gap-4">
                          <span className="col-span-12 font-mono text-xs uppercase tracking-[0.22em] text-forest-700/70 md:col-span-2">
                            Steg {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="col-span-12 md:col-span-10">
                            <h3 className="font-display text-2xl font-medium text-forest-950 md:text-3xl">
                              {p.steg}
                            </h3>
                            <p className="mt-2 max-w-2xl text-forest-900/75 leading-relaxed">
                              {p.beskrivelse}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <div className="border-y border-forest-900/15 py-12">
              <div className="flex flex-wrap items-baseline justify-between gap-6">
                <p className="font-display text-2xl font-medium text-forest-950 md:text-3xl">
                  Klar til å snakke om{' '}
                  <em className="font-display-soft italic text-glacier-600">
                    {tjeneste.tittel.toLowerCase()}
                  </em>
                  ?
                </p>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700"
                >
                  Ta kontakt
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Forrige/neste navigasjon */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {forrige ? (
              <Reveal>
                <Link href={`/tjenester/${forrige.slug}`} className="group block border-t border-forest-900/15 pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                    ← Forrige tjeneste
                  </p>
                  <p className="mt-3 font-display text-2xl font-medium text-forest-950 transition-colors group-hover:text-glacier-700">
                    {forrige.tittel}
                  </p>
                </Link>
              </Reveal>
            ) : (
              <div />
            )}
            {neste ? (
              <Reveal delay={100}>
                <Link
                  href={`/tjenester/${neste.slug}`}
                  className="group block border-t border-forest-900/15 pt-6 md:text-right"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                    Neste tjeneste →
                  </p>
                  <p className="mt-3 font-display text-2xl font-medium text-forest-950 transition-colors group-hover:text-glacier-700">
                    {neste.tittel}
                  </p>
                </Link>
              </Reveal>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
