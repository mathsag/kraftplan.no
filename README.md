# Kraftplan AS — Frontend

Next.js 15 + Supabase + Tailwind. Profesjonell nettside for småkraftrådgivning.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS** med eget designsystem (skogsgrønn + isblå + bone)
- **Supabase** for prosjekter (tjenester ligger i kode for nå)
- **Fraunces + Inter Tight** fonter (variabel italic, redaksjonell stil)

## Kom i gang

```bash
npm install
cp .env.example .env.local      # Fyll inn Supabase-nøkler senere
npm run dev
```

Appen kjører på `http://localhost:3000`. Tjenester fungerer uten Supabase — prosjekter trenger Supabase eller viser tom-tilstand.

## Bilder og video — viktig

### Hero-video på forsiden

Legg `hero.mp4` i `public/`. Anbefalt størrelse: 1920×1080, max 5-10 MB, ca. 10-20 sekunder. Husk poster-bilde:
- `public/hero.mp4` — selve videoen
- `public/hero-poster.jpg` — fallback-bilde (vises før video laster)

**For å hente videoen fra Wix:**
1. Logg inn i Wix-editoren → klikk på hero-videoen → "Endre video"
2. Last ned originalfilen fra mediabiblioteket
3. Komprimér evt. via [Handbrake](https://handbrake.fr) eller `ffmpeg`:
   ```bash
   ffmpeg -i original.mp4 -vf scale=1920:-2 -crf 28 -preset medium -an public/hero.mp4
   ```
   (`-an` fjerner lyd siden den uansett er dempet)

Hvis `hero.mp4` ikke finnes, faller siden tilbake til `hero-poster.jpg`.

### Portrettbilde av Kasper

Legg `kasper.jpg` i `public/`. Brukes på `/om-oss`. Anbefalt: 4:5 portrett, ca. 1200×1500.

### Tjenestebilder

Foreløpig bruker tjenestesidene gratis Unsplash-bilder. Bytt ut URL-ene i
`lib/tjenester-innhold.ts` med egne bilder når de er klare.

## Sider

| Side | Innhold |
|------|---------|
| `/` | Forside med video-hero, intro, tjenester-teaser, prinsipper, prosjekter, CTA |
| `/tjenester` | Oversikt over alle tjenester med bildekort |
| `/tjenester/[slug]` | Detaljside per tjeneste — hero, beskrivelse, leveranser, prosess, CTA |
| `/prosjekter` | Vårt arbeid (dynamisk fra Supabase, viser tom-tilstand hvis tomt) |
| `/om-oss` | Selskapet, Kasper Sagen, prinsipper |
| `/kontakt` | Direktekontakt + skjema |

## Designsystem

| Token | Farge | Bruk |
|-------|-------|------|
| `forest-950` → `forest-50` | `#0f1a14` → `#f3f7f4` | Primær (skogsgrønn) |
| `glacier-600` | `#33677d` | Aksent (isblå, kun italic) |
| `bone-50` | `#fdfcf9` | Bakgrunn |
| `font-display` | Fraunces (variabel) | Overskrifter |
| `font-sans` | Inter Tight | Brødtekst |

## Tjenester — hvordan endre

Alle tjenester ligger i `lib/tjenester-innhold.ts` med:
- `tittel`, `ingress`, `beskrivelse` (lange, separerte avsnitt med `\n\n`)
- `leveranser` (bullet-liste over hva som inkluderes)
- `prosess` (valgfritt: numrerte steg)
- `bilde` (URL — endre til egen)

For å legge til en ny tjeneste: legg til en ny entry i arrayet med unik `slug` og høyere `rekkefolge`. Den dukker automatisk opp i menyer og lister.

## Supabase oppsett

1. Opprett prosjekt på [supabase.com](https://supabase.com)
2. SQL Editor → kjør `supabase-schema.sql`
3. Hent URL og anon key → lim inn i `.env.local`

Tabellene som brukes nå: `prosjekter`. Resten kan flyttes fra kode til database senere når
admin-panelet er på plass.

## Kontaktskjema

Skjemaet på `/kontakt` poster til `/api/kontakt`. Foreløpig logger den til server-konsollen.
For å sende ekte e-post: legg til Resend API-key og koble inn i `app/api/kontakt/route.ts`
(kommentar-koden viser hvordan).

```bash
npm install resend
```

```env
RESEND_API_KEY=re_xxx
```

## Deploy til Vercel

```bash
vercel
```

Sett miljøvariabler i Vercel-dashboardet:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY` (når aktuelt)

## Filstruktur

```
app/
├── layout.tsx              Root layout, fonter, metadata
├── page.tsx                Forside
├── globals.css
├── tjenester/
│   ├── page.tsx            Oversikt
│   └── [slug]/page.tsx     Detaljside (statisk generert fra tjenester-innhold)
├── prosjekter/page.tsx
├── om-oss/page.tsx
├── kontakt/page.tsx
└── api/kontakt/route.ts    Kontaktskjema-API

components/
├── Header.tsx              Sticky nav, transparent over hero
├── Footer.tsx
├── VideoHero.tsx           Bakgrunnsvideo med fallback
├── Reveal.tsx              Scroll-trigger fade-in
└── KontaktSkjema.tsx       Skjema med klient-side state

lib/
├── supabase/client.ts
├── supabase/server.ts
└── tjenester-innhold.ts    Tjeneste-data (alle 7 tjenestene)

types/database.ts           TS-typer for Supabase
```
