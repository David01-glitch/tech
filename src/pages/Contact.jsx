import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { trackEvent } from '../utils/analytics.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    trackEvent('contact_submit');
    setSent(true);
  };
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We read every message. Most replies arrive within one business day." />
      <section className="container-x py-16 grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="card">
            <h2 className="text-xl mb-2">Email</h2>
            <a href="mailto:techeaseafter50@gmail.com" className="text-brand-700 break-all">techeaseafter50@gmail.com</a>
          </div>
          <div className="card">
            <h2 className="text-xl mb-2">Phone</h2>
            <a href="tel:+13125558421" className="text-brand-700">(312) 555-8421</a>
            <p className="text-sm text-slate-500 mt-1">Mon–Fri, 9am–5pm CT</p>
          </div>
          <div className="card">
            <h2 className="text-xl mb-2">Address</h2>
            <p className="text-slate-700">740 Lakeview Plaza<br/>Chicago, IL 60611, USA</p>
          </div>
        </div>
        <div className="card">
          {sent ? (
            <div className="text-center py-10">
              <h2 className="text-2xl mb-2">Thank you!</h2>
              <p className="text-slate-600">We will get back to you very soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1" htmlFor="n">Your name</label>
                <input id="n" required value={form.name} onChange={update('name')} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:border-brand-500 outline-none"/>
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="e">Email</label>
                <input id="e" type="email" required value={form.email} onChange={update('email')} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:border-brand-500 outline-none"/>
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="m">Message</label>
                <textarea id="m" rows="5" required value={form.message} onChange={update('message')} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:border-brand-500 outline-none"/>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
