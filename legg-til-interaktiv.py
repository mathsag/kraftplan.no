with open('index.html', 'r') as f:
    index = f.read()

# CSS for NVE og Matcher
ny_css = '''
    /* NVE-PROSESS */
    .nve-grid { display: grid; gap: 0.75rem; margin-top: 2.5rem; }
    @media (min-width: 640px) { .nve-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1024px) { .nve-grid { grid-template-columns: repeat(4, 1fr); } }
    .nve-kort { background: rgba(249,248,245,0.06); border: 1px solid rgba(249,248,245,0.1); border-radius: 6px; padding: 1.25rem; cursor: pointer; transition: all 0.25s; position: relative; }
    .nve-kort:hover { background: rgba(249,248,245,0.1); border-color: rgba(249,248,245,0.2); }
    .nve-kort.aktiv { background: white; border-color: white; color: var(--text); }
    .nve-kort-nr { font-size: 0.65rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.4; }
    .nve-kort.aktiv .nve-kort-nr { color: var(--green-600); opacity: 1; }
    .nve-kort-tittel { font-family: "DM Serif Display", serif; font-size: 1.1rem; margin-top: 0.5rem; color: var(--off-white); }
    .nve-kort.aktiv .nve-kort-tittel { color: var(--text); }
    .nve-kort-pil { position: absolute; bottom: 1rem; right: 1rem; opacity: 0; transition: opacity 0.2s; font-size: 0.8rem; }
    .nve-kort.aktiv .nve-kort-pil { opacity: 1; color: var(--green-600); }
    .nve-panel { margin-top: 1.5rem; background: white; border-radius: 8px; padding: 2rem; display: none; color: var(--text); }
    .nve-panel.aktiv { display: block; }
    .nve-panel-grid { display: grid; gap: 1.5rem; }
    @media (min-width: 768px) { .nve-panel-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
    .nve-panel-tittel { font-family: "DM Serif Display", serif; font-size: 1.5rem; }
    .nve-panel-tekst { font-size: 0.9375rem; color: var(--text-muted); margin-top: 0.75rem; line-height: 1.7; }
    .nve-panel-meta { margin-top: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .nve-meta-rad { display: flex; gap: 0.75rem; font-size: 0.85rem; }
    .nve-meta-label { font-weight: 500; color: var(--green-700); min-width: 5rem; }
    .nve-meta-val { color: var(--text-muted); }
    .nve-kraftplan-boks { background: var(--green-50); border-radius: 6px; padding: 1.25rem; border-left: 3px solid var(--green-600); }
    .nve-kraftplan-label { font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: var(--green-600); }
    .nve-kraftplan-tekst { font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.65; }

    /* MATCHER */
    .matcher-wrap { max-width: 680px; margin: 2.5rem auto 0; background: white; border-radius: 8px; border: 1px solid rgba(26,31,27,0.08); overflow: hidden; }
    .matcher-steg { display: none; padding: 2rem; }
    .matcher-steg.aktiv { display: block; }
    .matcher-progress { height: 3px; background: var(--green-100); }
    .matcher-progress-bar { height: 100%; background: var(--green-700); transition: width 0.4s ease; }
    .matcher-steg-label { font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: var(--green-600); }
    .matcher-sporsmal { font-family: "DM Serif Display", serif; font-size: 1.375rem; margin-top: 0.5rem; }
    .matcher-valg { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem; }
    .matcher-knapp { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem; border: 1px solid rgba(26,31,27,0.1); border-radius: 6px; background: none; cursor: pointer; font-family: inherit; font-size: 0.9375rem; color: var(--text); text-align: left; transition: all 0.2s; }
    .matcher-knapp:hover { border-color: var(--green-600); background: var(--green-50); }
    .matcher-knapp-ikon { font-size: 1.25rem; }
    .matcher-knapp-tittel { font-weight: 500; }
    .matcher-knapp-sub { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.1rem; }
    .matcher-resultat { display: none; padding: 2rem; }
    .matcher-resultat.aktiv { display: block; }
    .resultat-anbefaling { background: var(--green-50); border-radius: 6px; padding: 1.5rem; border-left: 3px solid var(--green-700); }
    .resultat-label { font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; color: var(--green-600); }
    .resultat-tittel { font-family: "DM Serif Display", serif; font-size: 1.375rem; margin-top: 0.5rem; }
    .resultat-tekst { font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.65; }
    .resultat-btns { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem; }
    .btn-sm { padding: 0.6rem 1.25rem; font-size: 0.85rem; }
    .btn-ghost { background: none; border: 1px solid rgba(26,31,27,0.15); color: var(--text); }
    .btn-ghost:hover { border-color: var(--green-700); color: var(--green-700); }
'''

nve_html = '''
<!-- NVE-PROSESS -->
<section class="section section-dark">
  <div class="wrap">
    <p class="label label-light">NVEs regelverk</p>
    <h2 class="section-heading" style="color:var(--off-white);margin-top:0.75rem">Forstå konsesjonsprosessen</h2>
    <p class="section-sub" style="color:rgba(249,248,245,0.55)">Klikk på en fase for å lære mer om hva den innebærer.</p>
    <div class="nve-grid">
      <div class="nve-kort aktiv" onclick="velgNVE(0)">
        <div class="nve-kort-nr">Fase 01</div>
        <div class="nve-kort-tittel">Melding og utredningsprogram</div>
        <div class="nve-kort-pil">&#8595;</div>
      </div>
      <div class="nve-kort" onclick="velgNVE(1)">
        <div class="nve-kort-nr">Fase 02</div>
        <div class="nve-kort-tittel">Konsekvensutredning</div>
        <div class="nve-kort-pil">&#8595;</div>
      </div>
      <div class="nve-kort" onclick="velgNVE(2)">
        <div class="nve-kort-nr">Fase 03</div>
        <div class="nve-kort-tittel">Søknad og høring</div>
        <div class="nve-kort-pil">&#8595;</div>
      </div>
      <div class="nve-kort" onclick="velgNVE(3)">
        <div class="nve-kort-nr">Fase 04</div>
        <div class="nve-kort-tittel">Vedtak og klage</div>
        <div class="nve-kort-pil">&#8595;</div>
      </div>
    </div>
    <div class="nve-panel aktiv" id="nve-0">
      <div class="nve-panel-grid">
        <div>
          <p class="nve-panel-tittel">Melding og utredningsprogram</p>
          <p class="nve-panel-tekst">Utbygger sender melding til NVE med en beskrivelse av prosjektet og alternativene som vurderes. NVE sender meldingen på høring og fastsetter deretter et program for konsekvensutredning som definerer hva som skal utredes.</p>
          <div class="nve-panel-meta">
            <div class="nve-meta-rad"><span class="nve-meta-label">Hjemmel</span><span class="nve-meta-val">Vassdragsreguleringsloven / energiloven</span></div>
            <div class="nve-meta-rad"><span class="nve-meta-label">Typisk tid</span><span class="nve-meta-val">2–6 måneder</span></div>
            <div class="nve-meta-rad"><span class="nve-meta-label">Gjelder</span><span class="nve-meta-val">Prosjekter over 1 MW</span></div>
          </div>
        </div>
        <div class="nve-kraftplan-boks">
          <p class="nve-kraftplan-label">Kraftplan bistår med</p>
          <p class="nve-kraftplan-tekst">Utarbeidelse av meldingsdokument, vurdering av alternativene og dialog med NVE om utredningsprogrammet.</p>
        </div>
      </div>
    </div>
    <div class="nve-panel" id="nve-1">
      <div class="nve-panel-grid">
        <div>
          <p class="nve-panel-tittel">Konsekvensutredning</p>
          <p class="nve-panel-tekst">Basert på utredningsprogrammet gjennomføres faglige utredninger av naturmiljø, hydrologi, kulturmiljø, landskap og samfunnsmessige forhold. Utredningene skal gi NVE og offentligheten grunnlag for å vurdere konsekvensene.</p>
          <div class="nve-panel-meta">
            <div class="nve-meta-rad"><span class="nve-meta-label">Typisk tid</span><span class="nve-meta-val">3–12 måneder</span></div>
            <div class="nve-meta-rad"><span class="nve-meta-label">Krav</span><span class="nve-meta-val">KU-forskriften og NVEs veileder</span></div>
          </div>
        </div>
        <div class="nve-kraftplan-boks">
          <p class="nve-kraftplan-label">Kraftplan bistår med</p>
          <p class="nve-kraftplan-tekst">Koordinering av fagutredninger, kvalitetssikring av rapporter og sammenstilling av konsekvensutredningen.</p>
        </div>
      </div>
    </div>
    <div class="nve-panel" id="nve-2">
      <div class="nve-panel-grid">
        <div>
          <p class="nve-panel-tittel">Søknad og høring</p>
          <p class="nve-panel-tekst">Konsesjonssøknaden sendes NVE og legges ut på offentlig høring. Alle berørte parter kan uttale seg. NVE gjennomfører befaring og møter med tiltakshaver og berørte kommuner.</p>
          <div class="nve-panel-meta">
            <div class="nve-meta-rad"><span class="nve-meta-label">Søknad</span><span class="nve-meta-val">NVEs veileder 13.09.2024</span></div>
            <div class="nve-meta-rad"><span class="nve-meta-label">Høringsfrist</span><span class="nve-meta-val">Min. 6 uker</span></div>
          </div>
        </div>
        <div class="nve-kraftplan-boks">
          <p class="nve-kraftplan-label">Kraftplan bistår med</p>
          <p class="nve-kraftplan-tekst">Utarbeidelse av søknadsdokument, innsending til NVE og håndtering av høringsuttalelser.</p>
        </div>
      </div>
    </div>
    <div class="nve-panel" id="nve-3">
      <div class="nve-panel-grid">
        <div>
          <p class="nve-panel-tittel">Vedtak og klage</p>
          <p class="nve-panel-tekst">NVE fatter vedtak om konsesjon, avslag eller utsettelse. Vedtaket kan påklages til Olje- og energidepartementet innen tre uker. Ved konsesjon følger vilkår som må oppfylles.</p>
          <div class="nve-panel-meta">
            <div class="nve-meta-rad"><span class="nve-meta-label">Klagefrist</span><span class="nve-meta-val">3 uker fra vedtaksdato</span></div>
            <div class="nve-meta-rad"><span class="nve-meta-label">Klageinstans</span><span class="nve-meta-val">Olje- og energidepartementet</span></div>
          </div>
        </div>
        <div class="nve-kraftplan-boks">
          <p class="nve-kraftplan-label">Kraftplan bistår med</p>
          <p class="nve-kraftplan-tekst">Gjennomgang av vedtaket, vurdering av klageadgang og bistand ved eventuell klage til OED.</p>
        </div>
      </div>
    </div>
  </div>
</section>
'''

matcher_html = '''
<!-- TJENESTE-MATCHER -->
<section class="section section-alt">
  <div class="wrap">
    <p class="label">Finn riktig tjeneste</p>
    <h2 class="section-heading" style="margin-top:0.75rem">Hva trenger du hjelp med?</h2>
    <p class="section-sub">Svar på tre spørsmål — vi anbefaler riktig startpunkt.</p>
    <div class="matcher-wrap">
      <div class="matcher-progress">
        <div class="matcher-progress-bar" id="progress-bar" style="width:33%"></div>
      </div>
      <div class="matcher-steg aktiv" id="steg-1">
        <p class="matcher-steg-label">Spørsmål 1 av 3</p>
        <h3 class="matcher-sporsmal">Hva handler prosjektet ditt om?</h3>
        <div class="matcher-valg">
          <button class="matcher-knapp" onclick="velgSvar(1,'nytt')">
            <span class="matcher-knapp-ikon">&#127754;</span>
            <div><div class="matcher-knapp-tittel">Nytt kraftverk</div><div class="matcher-knapp-sub">Jeg vil bygge et nytt småkraftverk</div></div>
          </button>
          <button class="matcher-knapp" onclick="velgSvar(1,'eksisterende')">
            <span class="matcher-knapp-ikon">&#9881;&#65039;</span>
            <div><div class="matcher-knapp-tittel">Eksisterende konsesjon</div><div class="matcher-knapp-sub">Jeg har allerede konsesjon og vil endre noe</div></div>
          </button>
          <button class="matcher-knapp" onclick="velgSvar(1,'usikker')">
            <span class="matcher-knapp-ikon">&#128161;</span>
            <div><div class="matcher-knapp-tittel">Usikker</div><div class="matcher-knapp-sub">Jeg vet ikke helt hva jeg trenger</div></div>
          </button>
        </div>
      </div>
      <div class="matcher-steg" id="steg-2">
        <p class="matcher-steg-label">Spørsmål 2 av 3</p>
        <h3 class="matcher-sporsmal">Hvilken fase er du i nå?</h3>
        <div class="matcher-valg">
          <button class="matcher-knapp" onclick="velgSvar(2,'tidlig')">
            <span class="matcher-knapp-ikon">&#128506;&#65039;</span>
            <div><div class="matcher-knapp-tittel">Tidlig fase</div><div class="matcher-knapp-sub">Jeg har en idé, men vet ikke om det er realiserbart</div></div>
          </button>
          <button class="matcher-knapp" onclick="velgSvar(2,'klar')">
            <span class="matcher-knapp-ikon">&#128203;</span>
            <div><div class="matcher-knapp-tittel">Klar for søknad</div><div class="matcher-knapp-sub">Jeg har gjort forarbeidet og er klar til å søke</div></div>
          </button>
          <button class="matcher-knapp" onclick="velgSvar(2,'prosess')">
            <span class="matcher-knapp-ikon">&#8987;</span>
            <div><div class="matcher-knapp-tittel">Allerede i prosess</div><div class="matcher-knapp-sub">Søknaden er inne hos NVE</div></div>
          </button>
        </div>
      </div>
      <div class="matcher-steg" id="steg-3">
        <p class="matcher-steg-label">Spørsmål 3 av 3</p>
        <h3 class="matcher-sporsmal">Hva trenger du mest hjelp til?</h3>
        <div class="matcher-valg">
          <button class="matcher-knapp" onclick="velgSvar(3,'alt')">
            <span class="matcher-knapp-ikon">&#128260;</span>
            <div><div class="matcher-knapp-tittel">Hele løpet</div><div class="matcher-knapp-sub">Fra start til ferdig konsesjon</div></div>
          </button>
          <button class="matcher-knapp" onclick="velgSvar(3,'spesifikk')">
            <span class="matcher-knapp-ikon">&#127919;</span>
            <div><div class="matcher-knapp-tittel">Spesifikke utredninger</div><div class="matcher-knapp-sub">Jeg trenger hjelp med én eller flere deloppgaver</div></div>
          </button>
          <button class="matcher-knapp" onclick="velgSvar(3,'rad')">
            <span class="matcher-knapp-ikon">&#128172;</span>
            <div><div class="matcher-knapp-tittel">Rådgivning</div><div class="matcher-knapp-sub">Jeg trenger noen å diskutere prosjektet med</div></div>
          </button>
        </div>
      </div>
      <div class="matcher-resultat" id="resultat">
        <div class="resultat-anbefaling">
          <p class="resultat-label">Anbefalt tjeneste</p>
          <h3 class="resultat-tittel" id="resultat-tittel"></h3>
          <p class="resultat-tekst" id="resultat-tekst"></p>
        </div>
        <div class="resultat-btns">
          <a href="kontakt.html" class="btn btn-dark btn-sm">Ta kontakt</a>
          <button class="btn btn-ghost btn-sm" onclick="nullstillMatcher()">Start på nytt</button>
        </div>
      </div>
    </div>
  </div>
</section>
'''

ny_js = '''
  function velgNVE(idx) {
    document.querySelectorAll('.nve-kort').forEach((el,i) => el.classList.toggle('aktiv', i===idx));
    document.querySelectorAll('.nve-panel').forEach((el,i) => el.classList.toggle('aktiv', i===idx));
  }

  const svar = {};
  const resultater = {
    nytt_tidlig_alt: { tittel: 'Mulighetsstudie + Konsesjonssøknad', tekst: 'Start med en mulighetsstudie for å vurdere om prosjektet er realiserbart, og deretter et samlet løp mot konsesjon.' },
    nytt_tidlig_spesifikk: { tittel: 'Mulighetsstudie', tekst: 'Første steg er å avklare om prosjektet er gjennomførbart. En mulighetsstudie gir deg grunnlaget du trenger.' },
    nytt_tidlig_rad: { tittel: 'Mulighetsstudie', tekst: 'Start med en uforpliktende prat. Vi gir deg raskt en vurdering av prosjektets potensial.' },
    nytt_klar_alt: { tittel: 'Konsesjonssøknad', tekst: 'Vi utarbeider en komplett søknad etter NVEs gjeldende veileder — fra teknisk beskrivelse til innsending.' },
    nytt_klar_spesifikk: { tittel: 'Konsesjonssøknad / Konsekvensutredning', tekst: 'Vi kan bistå med spesifikke deler av søknadsprosessen.' },
    nytt_klar_rad: { tittel: 'Konsesjonssøknad', tekst: 'Ta kontakt for en gjennomgang av hva søknaden din trenger.' },
    nytt_prosess_alt: { tittel: 'Bistand i høringsprosess', tekst: 'Vi håndterer høringsuttalelser og holder dialogen med NVE.' },
    nytt_prosess_spesifikk: { tittel: 'Bistand i høringsprosess', tekst: 'Vi bistår med tilsvar til høringsuttalelser og koordinering med myndigheter.' },
    nytt_prosess_rad: { tittel: 'Bistand i høringsprosess', tekst: 'Vi hjelper deg navigere høringsfasen.' },
    eksisterende_tidlig_alt: { tittel: 'Planendringssøknad', tekst: 'Vi vurderer omfanget av endringen og utarbeider nødvendig dokumentasjon.' },
    eksisterende_klar_alt: { tittel: 'Planendringssøknad', tekst: 'Vi setter sammen søknaden om planendring og sender inn til NVE.' },
    eksisterende_prosess_alt: { tittel: 'Bistand i høringsprosess', tekst: 'Vi bistår gjennom høringen og håndterer uttalelsene som kommer inn.' },
    usikker_tidlig_rad: { tittel: 'Uforpliktende prat', tekst: 'Det beste første steget er en uforpliktende prat. Vi hjelper deg finne ut hva du trenger.' },
  };

  function velgSvar(steg, val) {
    svar[steg] = val;
    if (steg < 3) {
      document.getElementById('steg-' + steg).classList.remove('aktiv');
      document.getElementById('steg-' + (steg+1)).classList.add('aktiv');
      document.getElementById('progress-bar').style.width = ((steg+1)/3*100) + '%';
    } else {
      document.getElementById('steg-3').classList.remove('aktiv');
      document.getElementById('progress-bar').style.width = '100%';
      const key = svar[1]+'_'+svar[2]+'_'+svar[3];
      const r = resultater[key] || { tittel: 'Ta kontakt', tekst: 'Vi hjelper deg finne riktig vei videre.' };
      document.getElementById('resultat-tittel').textContent = r.tittel;
      document.getElementById('resultat-tekst').textContent = r.tekst;
      document.getElementById('resultat').classList.add('aktiv');
    }
  }

  function nullstillMatcher() {
    Object.keys(svar).forEach(k => delete svar[k]);
    document.getElementById('resultat').classList.remove('aktiv');
    document.querySelectorAll('.matcher-steg').forEach(el => el.classList.remove('aktiv'));
    document.getElementById('steg-1').classList.add('aktiv');
    document.getElementById('progress-bar').style.width = '33%';
  }
'''

# Legg til CSS
index = index.replace('</style>', ny_css + '\n  </style>')

# Legg til seksjoner før footer
index = index.replace('<!-- FOOTER -->', nve_html + '\n' + matcher_html + '\n<!-- FOOTER -->')

# Legg til JS
index = index.replace('</script>', ny_js + '\n</script>')

with open('index.html', 'w') as f:
    f.write(index)

print("OK")
