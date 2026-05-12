'use client';

import { useState } from 'react';

export default function KontaktSkjema() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ navn: '', epost: '', telefon: '', melding: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Send feilet');
      setStatus('success');
      setForm({ navn: '', epost: '', telefon: '', melding: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border-t border-forest-900/15 py-12">
        <p className="font-display text-2xl font-medium text-forest-950">Takk for henvendelsen.</p>
        <p className="mt-3 text-forest-900/75">Vi svarer deg innen kort tid.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 border-t border-forest-900/15 pt-10 md:grid-cols-2">
      <div className="md:col-span-1">
        <label htmlFor="navn" className="block text-xs font-medium uppercase tracking-[0.18em] text-forest-700">
          Navn
        </label>
        <input
          id="navn"
          type="text"
          required
          value={form.navn}
          onChange={(e) => setForm({ ...form, navn: e.target.value })}
          className="mt-3 w-full border-0 border-b border-forest-900/20 bg-transparent py-3 text-forest-950 outline-none transition-colors focus:border-forest-900"
        />
      </div>
      <div className="md:col-span-1">
        <label htmlFor="epost" className="block text-xs font-medium uppercase tracking-[0.18em] text-forest-700">
          E-post
        </label>
        <input
          id="epost"
          type="email"
          required
          value={form.epost}
          onChange={(e) => setForm({ ...form, epost: e.target.value })}
          className="mt-3 w-full border-0 border-b border-forest-900/20 bg-transparent py-3 text-forest-950 outline-none transition-colors focus:border-forest-900"
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="telefon" className="block text-xs font-medium uppercase tracking-[0.18em] text-forest-700">
          Telefon (valgfritt)
        </label>
        <input
          id="telefon"
          type="tel"
          value={form.telefon}
          onChange={(e) => setForm({ ...form, telefon: e.target.value })}
          className="mt-3 w-full border-0 border-b border-forest-900/20 bg-transparent py-3 text-forest-950 outline-none transition-colors focus:border-forest-900"
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="melding" className="block text-xs font-medium uppercase tracking-[0.18em] text-forest-700">
          Hva kan vi hjelpe deg med?
        </label>
        <textarea
          id="melding"
          required
          rows={5}
          value={form.melding}
          onChange={(e) => setForm({ ...form, melding: e.target.value })}
          className="mt-3 w-full resize-none border-0 border-b border-forest-900/20 bg-transparent py-3 text-forest-950 outline-none transition-colors focus:border-forest-900"
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'sending' ? 'Sender...' : 'Send melding'}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-700">
            Noe gikk galt — prøv igjen eller send oss en e-post direkte.
          </p>
        )}
      </div>
    </form>
  );
}
