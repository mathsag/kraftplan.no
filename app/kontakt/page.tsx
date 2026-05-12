import Reveal from '@/components/Reveal';
import KontaktSkjema from '@/components/KontaktSkjema';

export const metadata = {
  title: 'Kontakt',
  description: 'Ta kontakt med Kraftplan AS for en uformell prat om ditt småkraftprosjekt.',
};

export default function KontaktPage() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
              Kontakt
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-[14ch] font-display text-display-xl font-medium text-forest-950">
              La oss <em className="font-display-soft italic text-glacier-600">snakke</em>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-forest-900/80">
              Send oss en melding eller ta kontakt direkte. Vi svarer innen kort tid og gir deg en
              uforpliktende vurdering av prosjektet ditt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DIREKTE KONTAKT */}
      <section className="pb-24">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-x-8 gap-y-12 border-t border-forest-900/15 pt-16 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  Telefon
                </p>
                <a
                  href="tel:+4748193444"
                  className="mt-4 block font-display text-4xl font-medium text-forest-950 transition-colors hover:text-glacier-600 md:text-5xl"
                >
                  +47 481 93 444
                </a>
              </div>

              <div className="md:col-span-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  E-post
                </p>
                <a
                  href="mailto:kasper.sagen@kraftplan.no"
                  className="mt-4 block break-all font-display text-3xl font-medium text-forest-950 transition-colors hover:text-glacier-600 md:text-4xl"
                >
                  kasper.sagen@kraftplan.no
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-20 grid gap-8 border-t border-forest-900/15 pt-12 md:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-forest-700">
                  Selskap
                </p>
                <p className="mt-3 text-forest-900/85">Kraftplan AS</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-forest-700">
                  Org.nr
                </p>
                <a
                  href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=933873870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block tabular-nums text-forest-900/85 transition-colors hover:text-forest-950"
                >
                  933 873 870
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KONTAKTSKJEMA */}
      <section className="bg-bone-100/50 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest-700">
                  <span className="mr-3 inline-block h-px w-8 align-middle bg-forest-700/60" />
                  Send oss en melding
                </p>
                <h2 className="mt-6 font-display text-display-md font-medium leading-[1.1] text-forest-950">
                  Fortell oss om{' '}
                  <em className="font-display-soft italic text-glacier-600">prosjektet</em> ditt.
                </h2>
                <p className="mt-6 text-forest-900/75 leading-relaxed">
                  Jo mer du forteller, desto bedre kan vi vurdere hva som er riktig vei videre.
                </p>
              </div>

              <div className="md:col-span-8">
                <KontaktSkjema />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
