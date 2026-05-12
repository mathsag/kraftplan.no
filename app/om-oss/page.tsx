import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ImageWithFallback from '@/components/ImageWithFallback';

export const metadata = {
  title: 'Om oss',
  description: 'Kraftplan AS — et fagmiljø for småkraftutvikling i Norge, ledet av Kasper Sagen.',
};

export default function OmOssPage() {
  return (
    <>
      {/* HERO med naturbilde */}
      <section className="relative h-[60svh] min-h-[440px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1551649446-eddf8e8b86bb?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/30 to-forest-950/85" />

        <div className="container-wide relative flex h-full flex-col justify-end pb-16 pt-32 md:pb-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-bone-100/85">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-bone-100/60" />
              Om oss
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-[18ch] font-display text-display-xl font-medium text-bone-50">
              Fagfolk for <em className="font-display-soft italic text-glacier-300">norsk</em> småkraft.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HOVEDTEKST OM SELSKAPET */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  Selskapet
                </p>
              </div>
              <div className="md:col-span-9">
                <p className="font-display text-display-md font-medium leading-[1.15] text-forest-950">
                  Kraftplan bistår utbyggere med konsesjonssøknader, fagutredninger og planarbeid —
                  med <em className="font-display-soft italic text-glacier-600">særlig spisskompetanse</em> på småkraftverk.
                </p>
                <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-forest-900/85">
                  <p>
                    Vi tilbyr tjenester innen hydrologiske analyser, produksjonsberegninger, tekniske
                    løsninger og konsekvensutredninger, i tråd med NVEs krav og gjeldende regelverk.
                  </p>
                  <p>
                    Kraftplan ble startet for å tilby mer enn bare standarddokumenter. Vi ønsker å være
                    en samarbeidspartner som leverer gjennomarbeidede, realistiske og tilpassede
                    løsninger — med respekt for både naturgrunnlaget, tiltakshavers mål og myndighetenes
                    krav.
                  </p>
                  <p>
                    Vi har utarbeidet og sendt inn flere konsesjonssøknader til NVE på vegne av de
                    største aktørene i bransjen. I tillegg leverer vi konsekvensutredninger for andre
                    typer tiltak — som vindkraft, solkraft, reguleringsplaner og infrastrukturprosjekter.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KASPER — daglig leder */}
      <section className="bg-bone-100/50 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
              Daglig leder
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal delay={100} className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-forest-100">
                <ImageWithFallback
                  src="/kasper.jpg"
                  alt="Kasper Sagen, daglig leder av Kraftplan AS"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={200} className="md:col-span-7 md:pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-forest-700/70">
                Kasper Sagen
              </p>
              <h2 className="mt-3 font-display text-display-md font-medium text-forest-950">
                Daglig leder
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-forest-900/85">
                <p>
                  Selskapet er etablert og faglig ledet av Kasper Sagen, som har mastergrad i
                  arealplanlegging og flere års erfaring med småkraftprosjekter og offentlig
                  saksbehandling.
                </p>
                <p>
                  Med bakgrunn fra både planlegging, feltarbeid og koordinering av tverrfaglige
                  vurderinger, kombinerer Kasper faglig innsikt med praktisk forståelse for hva som
                  kreves for å få et prosjekt godkjent.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-forest-900/15 pt-8 text-sm">
                <a
                  href="tel:+4748193444"
                  className="link-underline font-medium text-forest-900"
                >
                  +47 481 93 444
                </a>
                <a
                  href="mailto:kasper.sagen@kraftplan.no"
                  className="link-underline font-medium text-forest-900"
                >
                  kasper.sagen@kraftplan.no
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINSIPPER */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
              Vår tilnærming
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-12 border-t border-forest-900/15 pt-16 md:grid-cols-3">
            <Reveal delay={100}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-forest-700">
                01 — Faglig dybde
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium text-forest-950">
                Vi følger NVEs veiledere
              </h3>
              <p className="mt-3 text-forest-900/75 leading-relaxed">
                Søknader som tåler grundig prøving fra myndighetene. Ingen snarveier — vi gjør det
                riktig første gang.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-forest-700">
                02 — Personlig involvering
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium text-forest-950">
                Direkte fagkontakt
              </h3>
              <p className="mt-3 text-forest-900/75 leading-relaxed">
                Du snakker med dem som faktisk gjør jobben — ikke med et lag mellomledd eller
                prosjektledere uten dyp faglig forankring.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-forest-700">
                03 — Bærekraftig kraft
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium text-forest-950">
                Respekt for konteksten
              </h3>
              <p className="mt-3 text-forest-900/75 leading-relaxed">
                Småkraft som tar hensyn til vassdrag, naboer og lokalsamfunn — ikke bare turbinene og
                produksjonstallene.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          <Reveal>
            <div className="border-y border-forest-900/15 py-12">
              <div className="flex flex-wrap items-baseline justify-between gap-6">
                <p className="font-display text-2xl font-medium text-forest-950 md:text-3xl">
                  Vil du <em className="font-display-soft italic text-glacier-600">snakke med oss?</em>
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
    </>
  );
}
