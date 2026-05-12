import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { navn, epost, telefon, melding } = body;

    if (!navn || !epost || !melding) {
      return NextResponse.json({ error: 'Manglende felt' }, { status: 400 });
    }

    // TODO: Koble til Resend eller annen e-posttjeneste
    // For nå logges henvendelser til server-konsollen
    console.log('Ny kontakthenvendelse:', { navn, epost, telefon, melding });

    // Eksempel for Resend (når API-key er på plass):
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Kraftplan <noreply@kraftplan.no>',
    //   to: 'kasper.sagen@kraftplan.no',
    //   subject: `Henvendelse fra ${navn}`,
    //   text: `Fra: ${navn} <${epost}>\nTelefon: ${telefon}\n\n${melding}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Kontakt-API feil:', error);
    return NextResponse.json({ error: 'Server-feil' }, { status: 500 });
  }
}
