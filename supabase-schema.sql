-- Kraftplan databaseskjema
-- Kjør i Supabase SQL Editor

-- TJENESTER
create table if not exists tjenester (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  tittel text not null,
  ingress text not null,
  innhold text,
  bilde_url text,
  ikon text,
  rekkefolge integer not null default 0,
  publisert boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists tjenester_rekkefolge_idx on tjenester(rekkefolge);
create index if not exists tjenester_slug_idx on tjenester(slug);

-- PROSJEKTER
create table if not exists prosjekter (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  tittel text not null,
  beskrivelse text not null,
  sted text,
  status text not null default 'fullfort',
  bilder text[] not null default '{}',
  hovedbilde text,
  dato date,
  publisert boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists prosjekter_dato_idx on prosjekter(dato desc);
create index if not exists prosjekter_slug_idx on prosjekter(slug);

-- OM_OSS (single row)
create table if not exists om_oss (
  id uuid primary key default gen_random_uuid(),
  innhold text not null,
  bilde_url text,
  updated_at timestamptz not null default now()
);

-- KONTAKT (single row)
create table if not exists kontakt (
  id uuid primary key default gen_random_uuid(),
  telefon text,
  epost text,
  org_nr text,
  adresse text,
  updated_at timestamptz not null default now()
);

-- RLS policies — public read av publiserte rader, auth har full tilgang
alter table tjenester enable row level security;
alter table prosjekter enable row level security;
alter table om_oss enable row level security;
alter table kontakt enable row level security;

create policy "Public read tjenester" on tjenester for select using (publisert = true);
create policy "Public read prosjekter" on prosjekter for select using (publisert = true);
create policy "Public read om_oss" on om_oss for select using (true);
create policy "Public read kontakt" on kontakt for select using (true);

create policy "Auth full tjenester" on tjenester for all using (auth.role() = 'authenticated');
create policy "Auth full prosjekter" on prosjekter for all using (auth.role() = 'authenticated');
create policy "Auth full om_oss" on om_oss for all using (auth.role() = 'authenticated');
create policy "Auth full kontakt" on kontakt for all using (auth.role() = 'authenticated');

-- Storage bucket for bilder
insert into storage.buckets (id, name, public)
values ('kraftplan-bilder', 'kraftplan-bilder', true)
on conflict (id) do nothing;

create policy "Public read bilder" on storage.objects
  for select using (bucket_id = 'kraftplan-bilder');

create policy "Auth upload bilder" on storage.objects
  for insert with check (bucket_id = 'kraftplan-bilder' and auth.role() = 'authenticated');

create policy "Auth update bilder" on storage.objects
  for update using (bucket_id = 'kraftplan-bilder' and auth.role() = 'authenticated');

create policy "Auth delete bilder" on storage.objects
  for delete using (bucket_id = 'kraftplan-bilder' and auth.role() = 'authenticated');

-- Seed-data for tjenester (matcher slugs i fallback-data i appen)
insert into tjenester (slug, tittel, ingress, rekkefolge) values
  ('konsesjonssoknad', 'Konsesjonssøknad', 'Komplette søknader etter NVEs gjeldende veileder.', 1),
  ('planendringssoknad', 'Planendringssøknad', 'Tilpasninger for nye krav, tekniske forbedringer og produksjonsforhold.', 2),
  ('mulighetsstudie', 'Mulighetsstudie', 'Vurdering av potensial, teknikk, miljø, økonomi og reguleringer i tidlig fase.', 3),
  ('konsekvensutredning', 'Konsekvensutredning', 'Systematisk vurdering av miljømessige, samfunnsmessige og økonomiske konsekvenser.', 4),
  ('horing', 'Bistand i høringsprosess', 'Rådgivning og koordinering med myndigheter gjennom hele høringen.', 5),
  ('kommunale-forhold', 'Kommunale forhold', 'Tinglysning, grunneierrettigheter, servitutter og lokal planlegging.', 6),
  ('drone', 'Droneoppdrag', 'Dokumentasjon, fremdriftsrapportering og visuell prosjektstøtte.', 7)
on conflict (slug) do nothing;

-- Seed kontakt
insert into kontakt (telefon, epost, org_nr) values
  ('+47 481 93 444', 'kasper.sagen@kraftplan.no', '933 873 870');

-- Seed om oss
insert into om_oss (innhold) values
  ('Kraftplan AS er et fagmiljø som spesialiserer seg på utvikling av småkraftverk i Norge. Vi forener teknisk kompetanse, miljøforståelse og kjennskap til norsk forvaltning.

Vi er et lite, dedikert team som tror på at god rådgivning bygger på faglig dybde og personlig involvering. Når du jobber med oss, snakker du med dem som faktisk gjør jobben.');
