export default function KontaktSkjema() {
  return (
    <div className="border-t border-forest-900/15 pt-10">
      <p className="text-lg leading-relaxed text-forest-900/80">
        Send oss en e-post direkte, så svarer vi innen kort tid.
      </p>
      
        href="mailto:kasper.sagen@kraftplan.no?subject=Forespørsel fra kraftplan.no"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-medium text-bone-50 transition-all duration-300 hover:bg-forest-700"
      >
        Send e-post
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}
