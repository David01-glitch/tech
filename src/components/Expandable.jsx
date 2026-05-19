import { useState } from 'react';

export default function Expandable({ summary, children, buttonLabel = 'Read More' }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p className="text-slate-700">{summary}</p>
      <button
        onClick={() => setOpen(o => !o)}
        className="mt-3 text-brand-700 font-semibold hover:text-brand-800 transition"
        aria-expanded={open}
      >
        {open ? 'Show Less ▲' : `${buttonLabel} ▼`}
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="text-slate-700 space-y-3 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
