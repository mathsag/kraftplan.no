export type Tjeneste = {
  id: string;
  slug: string;
  tittel: string;
  ingress: string;
  innhold: string | null;
  bilde_url: string | null;
  ikon: string | null;
  rekkefolge: number;
  publisert: boolean;
  created_at: string;
  updated_at: string;
};

export type Prosjekt = {
  id: string;
  slug: string;
  tittel: string;
  beskrivelse: string;
  sted: string | null;
  status: 'pågående' | 'fullført' | 'planlegging';
  bilder: string[];
  hovedbilde: string | null;
  dato: string | null;
  publisert: boolean;
  created_at: string;
  updated_at: string;
};

export type OmOss = {
  id: string;
  innhold: string;
  bilde_url: string | null;
  updated_at: string;
};

export type Kontakt = {
  id: string;
  telefon: string | null;
  epost: string | null;
  org_nr: string | null;
  adresse: string | null;
  updated_at: string;
};
