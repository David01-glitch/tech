import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('te50_cookies')) setShow(true);
  }, []);
  if (!show) return null;
  const accept = () => { localStorage.setItem('te50_cookies', 'yes'); setShow(false); };
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-50 bg-white border border-slate-200 rounded-2xl shadow-soft p-5">
      <p className="text-sm text-slate-700">We use cookies to make this site easier to use and to understand how readers like you use our guides. By continuing you agree to our <a href="/privacy" className="text-brand-700 underline">Privacy Policy</a>.</p>
      <div className="mt-3 flex gap-3">
        <button onClick={accept} className="btn-primary !py-2 !px-4 text-sm">Accept</button>
        <button onClick={() => setShow(false)} className="btn-secondary !py-2 !px-4 text-sm">Dismiss</button>
      </div>
    </div>
  );
}
