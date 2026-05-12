import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { createClient } from '@/lib/supabase/server';
import type { Prosjekt } from '@/types/database';

export const metadata = {
  title: 'Prosjekter',
  description: 'Et utvalg av småkraftprosjekter Kraftplan har utviklet og bistått med.',
};

export default async function ProsjekterPage() {
  let prosjekter: Prosjekt[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('prosjekter')
      .select('*')
      .eq('publisert', true)
      .order('dato', { ascending: false });
    prosjekter = data ?? [];
  } catch {}

  return (
    <>
      {/* HERO */}
      <section className="relative h-[55svh] min-h-[400px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/30 to-forest-950/85" />

        <div className="container-wide relative flex h-full flex-col justify-end pb-16 pt-32 md:pb-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-bone-100/85">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-bone-100/60" />
              Vårt arbeid
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-[14ch] font-display text-display-xl font-medium text-bone-50">
              Et utvalg <em className="font-display-soft italic text-glacier-300">prosjekter</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-24 pb-16 md:pt-32">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  Erfaring
                </p>
              </div>
              <div className="md:col-span-9">
                <p className="max-w-3xl font-display text-display-sm font-medium leading-[1.2] text-forest-950">
                  Vi har utarbeidet og sendt inn flere konsesjonssøknader til NVE på vegne av de
                  største aktørene i bransjen, og leverer konsekvensutredninger for et bredt spekter
                  av tiltak.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          {prosjekter.length === 0 ? (
            <Reveal>
              <div className="border-y border-forest-900/15 py-24 text-center">
                <p className="font-display text-display-sm font-medium text-forest-950">
                  Prosjektportefølje publiseres snart.
                </p>
                <p className="mx-auto mt-4 max-w-md text-forest-900/70">
                  Vi jobber med å samle dokumentasjon fra prosjekter vi har bistått. I mellomtiden
                  kan vi gjerne fortelle om referanser direkte.
                </p>
                <Link
                  href="/kontakt"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700"
                >
                  Spør oss om referanser
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {prosjekter.map((p, idx) => (
                <Reveal key={p.id} delay={idx * 80}>
                  <Link href={`/prosjekter/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-forest-100">
                      {p.hovedbilde && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.hovedbilde}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-bone-50/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-forest-900 backdrop-blur">
                        {p.status}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-medium text-forest-950">
                      {p.tittel}
                    </h2>
                    <div className="mt-2 flex items-center justify-between text-sm text-forest-900/60">
                      {p.sted && <span>{p.sted}</span>}
                      {p.dato && (
                        <span className="font-mono text-xs tabular-nums">
                          {new Date(p.dato).getFullYear()}
                        </span>
                      )}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
