import Link from 'next/link';
import Reveal from '@/components/Reveal';
import VideoHero from '@/components/VideoHero';
import { createClient } from '@/lib/supabase/server';
import type { Prosjekt } from '@/types/database';

async function getUtvalgteProsjekter(): Promise<Prosjekt[]> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('prosjekter')
      .select('*')
      .eq('publisert', true)
      .order('dato', { ascending: false })
      .limit(3);
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const prosjekter = await getUtvalgteProsjekter();

  return (
    <>
      {/* HERO MED VIDEO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        {/* Video bakgrunn */}
        <VideoHero />

        {/* Mørk overlay for lesbarhet */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/40 to-forest-950/85"
        />

        {/* Innhold */}
        <div className="container-wide relative flex h-full flex-col justify-end pb-20 pt-32 md:pb-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-bone-100/85">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-bone-100/60" />
              Småkraftutvikling i Norge
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-8 max-w-[16ch] font-display text-display-xl font-medium text-bone-50">
              Effektiv planlegging,{' '}
              <em className="font-display-soft italic text-glacier-300">bærekraftig</em> kraft.
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-bone-50 px-7 py-3.5 text-sm font-medium text-forest-950 transition-all duration-300 hover:bg-bone-100"
              >
                Start ditt prosjekt
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/tjenester"
                className="link-underline text-sm font-medium tracking-wide text-bone-50"
              >
                Se våre tjenester
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll-indikator */}
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-100/60 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.22em]">Bla ned</span>
          <span className="h-10 w-px bg-bone-100/40" />
        </div>
      </section>

      {/* INTRO — kort beskrivelse av selskapet */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
                Hvem vi er
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-8">
              <p className="font-display text-display-md font-medium leading-[1.15] text-forest-950">
                Kraftplan bistår utbyggere med konsesjonssøknader, fagutredninger og
                planarbeid — med <em className="font-display-soft italic text-glacier-600">spisskompetanse</em> på småkraftverk.
              </p>
              <Link
                href="/om-oss"
                className="link-underline mt-10 inline-block text-sm font-medium text-forest-900"
              >
                Mer om oss →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TJENESTER — kort teaser, full liste på /tjenester */}
      <section className="relative py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
                Tjenester
              </p>
              <h2 className="mt-6 font-display text-display-lg font-medium leading-[1.05] text-forest-950">
                Fra mulighet til{' '}
                <em className="font-display-soft italic text-glacier-600">konsesjon</em>.
              </h2>
            </Reveal>

            <div className="md:col-span-7 md:pt-4">
              <p className="text-lg leading-relaxed text-forest-900/80">
                Vi tilbyr et komplett spekter av tjenester for småkraftutvikling — fra første
                mulighetsstudie til ferdig konsesjon, og alle fagutredninger som kreves underveis.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-forest-900/80">
                Hver tjeneste kan leveres frittstående, eller som del av et samlet løp.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/tjenester"
                  className="group inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700"
                >
                  Se alle tjenester
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINSIPPER / VERDIER */}
      <section className="relative overflow-hidden bg-forest-900 py-32 text-bone-100 md:py-40">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgb(58 125 148) 0%, transparent 60%),' +
              'radial-gradient(circle at 80% 70%, rgb(116 154 126) 0%, transparent 50%)',
          }}
        />
        <div className="container-wide relative">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-bone-300">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-bone-300/60" />
              Vår tilnærming
            </p>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="mt-10 max-w-5xl font-display text-display-lg font-medium leading-[1.05] text-bone-50">
              <span className="text-bone-50/40">«</span>God småkraftutvikling handler om å forstå
              vassdraget, naboene, kommunen og myndighetene — like mye som turbinene.
              <span className="text-bone-50/40">»</span>
            </blockquote>
          </Reveal>

          <div className="mt-20 grid gap-10 border-t border-bone-50/15 pt-16 md:grid-cols-3">
            <Reveal delay={200}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone-300">01 — Faglig dybde</p>
              <p className="mt-4 text-bone-100/85">
                Vi følger NVEs veiledere og bygger søknader som tåler grundig prøving fra myndighetene.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone-300">02 — Personlig involvering</p>
              <p className="mt-4 text-bone-100/85">
                Du får direkte kontakt med fagperson — ingen mellomledd, ingen overlevering mellom team.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone-300">03 — Bærekraftig kraft</p>
              <p className="mt-4 text-bone-100/85">
                Småkraft som tar hensyn til vassdrag, naboer og lokalsamfunn — ikke bare turbinene.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROSJEKTER — vises kun hvis Supabase har data */}
      {prosjekter.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <div className="mb-16 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
                  Utvalgte prosjekter
                </p>
                <h2 className="mt-6 font-display text-display-md font-medium text-forest-950">
                  Vårt arbeid.
                </h2>
              </div>
              <Link
                href="/prosjekter"
                className="link-underline hidden text-sm font-medium text-forest-900 md:inline-block"
              >
                Alle prosjekter →
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {prosjekter.map((p, idx) => (
                <Reveal key={p.id} delay={idx * 100}>
                  <Link href={`/prosjekter/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-forest-100">
                      {p.hovedbilde && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.hovedbilde}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium text-forest-950">
                      {p.tittel}
                    </h3>
                    {p.sted && (
                      <p className="mt-1 text-sm text-forest-900/60">{p.sted}</p>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-10 border-y border-forest-900/15 py-16 md:grid-cols-12 md:gap-16 md:py-24">
              <div className="md:col-span-7">
                <h2 className="font-display text-display-lg font-medium leading-[1.02] text-forest-950">
                  Har du et vassdrag<br />
                  <em className="font-display-soft italic text-glacier-600">med potensial?</em>
                </h2>
              </div>
              <div className="md:col-span-5 md:pt-4">
                <p className="text-lg leading-relaxed text-forest-900/80">
                  Ta kontakt for en uformell prat. Vi gir deg en ærlig vurdering av prosjektets
                  muligheter — uten forpliktelser.
                </p>
                <Link
                  href="/kontakt"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700"
                >
                  Ta kontakt
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
