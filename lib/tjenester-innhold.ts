export type TjenesteInnhold = {
  slug: string;
  tittel: string;
  ingress: string;
  beskrivelse: string;
  leveranser: string[]; // Hva inkluderer dette?
  prosess?: { steg: string; beskrivelse: string }[];
  bilde: string; // unsplash eller egen
  rekkefolge: number;
};

export const tjenesterInnhold: TjenesteInnhold[] = [
  {
    slug: 'konsesjonssoknad',
    tittel: 'Konsesjonssøknad',
    ingress:
      'Vi utarbeider komplette konsesjonssøknader etter NVEs gjeldende veileder (13.09.2024).',
    beskrivelse:
      'En konsesjonssøknad er fundamentet for ethvert småkraftprosjekt. Vi tar oss av hele prosessen — fra teknisk beskrivelse og hydrologiske beregninger til miljøvurderinger og samfunnsmessige konsekvenser.\n\nResultatet er en gjennomarbeidet søknad som tåler myndighetenes prøving og gir prosjektet best mulig utgangspunkt for godkjenning.',
    leveranser: [
      'Komplett søknadsdokument etter NVEs mal',
      'Hydrologiske analyser og produksjonsberegninger',
      'Teknisk beskrivelse av anlegget',
      'Miljøvurderinger og avbøtende tiltak',
      'Samfunnsmessige og økonomiske vurderinger',
      'Kart, tegninger og illustrasjoner',
      'Innsending til NVE og dialog underveis',
    ],
    prosess: [
      {
        steg: 'Befaring og kartlegging',
        beskrivelse: 'Vi besøker området, kartlegger vassdraget og vurderer prosjektets særegenheter.',
      },
      {
        steg: 'Faglige utredninger',
        beskrivelse: 'Hydrologi, miljø, teknikk og samfunn — vi koordinerer alle nødvendige fagrapporter.',
      },
      {
        steg: 'Søknadsutarbeidelse',
        beskrivelse: 'Vi setter sammen søknaden med alle vedlegg etter NVEs gjeldende mal.',
      },
      {
        steg: 'Innsending og oppfølging',
        beskrivelse: 'Vi sender inn til NVE og følger opp gjennom hele saksbehandlingen.',
      },
    ],
    bilde:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 1,
  },
  {
    slug: 'planendringssoknad',
    tittel: 'Planendringssøknad',
    ingress:
      'Hjelp til planendringssøknader tilpasset nye krav, tekniske forbedringer og produksjonsforhold.',
    beskrivelse:
      'Mange eksisterende konsesjoner trenger oppdatering — enten for å hente ut mer produksjon, tilpasse seg nye miljøkrav, eller utnytte teknologisk utvikling.\n\nVi sørger for at endringene begrunnes faglig og dokumenteres i tråd med NVEs forventninger, slik at saksbehandlingen går så ryddig som mulig.',
    leveranser: [
      'Vurdering av endringens omfang og konsesjonsmessige implikasjoner',
      'Oppdatert teknisk beskrivelse',
      'Reviderte produksjonsberegninger',
      'Miljømessig konsekvensvurdering av endringen',
      'Begrunnelse og søknadsdokument',
      'Dialog med NVE',
    ],
    bilde:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 2,
  },
  {
    slug: 'mulighetsstudie',
    tittel: 'Mulighetsstudie',
    ingress:
      'Rådgivning og støtte i vurdering av potensial, teknikk, miljø, økonomi og reguleringer i tidlig fase.',
    beskrivelse:
      'Før man bruker tid og penger på en full konsesjonssøknad, lønner det seg å avklare om prosjektet er liv laga.\n\nEn mulighetsstudie gir deg et tydelig bilde av økonomi, miljørisiko og sannsynlighet for konsesjon — så du kan ta gode beslutninger tidlig.',
    leveranser: [
      'Foreløpige produksjonsberegninger',
      'Identifisering av miljømessige risikoer',
      'Vurdering av tekniske løsninger',
      'Indikativ kostnadsestimering',
      'Vurdering av sannsynlighet for konsesjon',
      'Anbefaling om videre prosess',
    ],
    bilde:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 3,
  },
  {
    slug: 'konsekvensutredning',
    tittel: 'Konsekvensutredning',
    ingress:
      'Systematisk vurdering av miljømessige, samfunnsmessige og økonomiske konsekvenser ved utbyggingsprosjekter.',
    beskrivelse:
      'Når prosjektet krever konsekvensutredning, er det avgjørende å gjøre det grundig. Vi koordinerer fagutredninger, samler dokumentasjon og leverer rapporter som gir myndighetene et reelt beslutningsgrunnlag.\n\nVi har erfaring med utredninger for både småkraft, vindkraft, solkraft og infrastrukturprosjekter.',
    leveranser: [
      'Plan for konsekvensutredning',
      'Koordinering av fagutredninger',
      'Vurdering av miljømessige konsekvenser',
      'Vurdering av samfunnsmessige konsekvenser',
      'Avbøtende tiltak og kompenserende ordninger',
      'Samlet utredningsrapport',
    ],
    bilde:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 4,
  },
  {
    slug: 'horing',
    tittel: 'Bistand i høringsprosess',
    ingress:
      'Rådgivning og støtte i forbindelse med høringsuttalelser og koordinering med myndigheter.',
    beskrivelse:
      'Høringsfasen er ofte avgjørende for utfallet. Vi hjelper deg å navigere innspill fra grunneiere, kommune, fylke og statlige etater — og formulerer faglig sterke svar som ivaretar prosjektets interesser uten å skape unødig konflikt.',
    leveranser: [
      'Gjennomgang av innkomne høringsuttalelser',
      'Utarbeidelse av tilsvar og kommentarer',
      'Dialog med myndigheter og berørte parter',
      'Eventuelle justeringer av prosjektet',
      'Oppfølgende rapport til NVE',
    ],
    bilde:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 5,
  },
  {
    slug: 'kommunale-forhold',
    tittel: 'Kommunale forhold',
    ingress: 'Hjelp med tinglysning, grunneierrettigheter, servitutter og lokal planlegging.',
    beskrivelse:
      'Lokale forhold avgjør ofte fremdriften. Vi bistår med rettighetsavklaring, tinglysning, dialog med kommunen og samordning med eksisterende reguleringsplaner — slik at du har det formelle på plass når byggingen starter.',
    leveranser: [
      'Avklaring av grunneierrettigheter',
      'Tinglysning av servitutter og rettigheter',
      'Dialog med kommunen om planmessige forhold',
      'Vurdering av reguleringsplaner og kommuneplan',
      'Bistand til avtaler med grunneiere',
    ],
    bilde:
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 6,
  },
  {
    slug: 'drone',
    tittel: 'Droneoppdrag',
    ingress: 'Dokumentasjon, fremdriftsrapportering og visuell støtte i prosjektkoordinering.',
    beskrivelse:
      'Med drone får du presis dokumentasjon av før-, under- og etter-tilstand. Bilder og video gir både myndigheter, eiere og naboer en tydelig forståelse av prosjektet — og støtter både søknadsfasen og senere oppfølging.',
    leveranser: [
      'Flyfoto og video av prosjektområdet',
      'Ortofoto og 3D-modeller ved behov',
      'Fremdriftsdokumentasjon i byggefase',
      'Visualiseringer for søknad og presentasjon',
      'Dokumentasjon av miljømessig oppfølging',
    ],
    bilde:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1600&q=80',
    rekkefolge: 7,
  },
];

export const getTjeneste = (slug: string) =>
  tjenesterInnhold.find((t) => t.slug === slug);
