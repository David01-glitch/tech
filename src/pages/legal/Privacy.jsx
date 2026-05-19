import PageHeader from '../../components/PageHeader.jsx';

export default function Privacy() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="Last updated: May 1, 2026" />
      <section className="container-x py-12 max-w-3xl">
        <div className="card space-y-4 text-slate-700">
          <h2 className="text-2xl">1. What we collect</h2>
          <p>Tech Ease After 50 collects only the information you choose to share: your email address when you subscribe to the newsletter, and your name, email, and message when you use our contact form.</p>
          <h2 className="text-2xl">2. How we use information</h2>
          <p>Your information is used to reply to your messages, send you the weekly newsletter you signed up for, and improve our content. We never sell or rent personal information.</p>
          <h2 className="text-2xl">3. Cookies and analytics</h2>
          <p>We use Google Analytics to count visits anonymously. This helps us see which guides are most useful. You may decline analytics cookies via the banner shown on your first visit.</p>
          <h2 className="text-2xl">4. Advertising</h2>
          <p>Some pages may show Google AdSense advertisements. Google may use cookies to personalize ads. You can manage ad personalization at <a className="text-brand-700" href="https://adssettings.google.com">adssettings.google.com</a>.</p>
          <h2 className="text-2xl">5. Children</h2>
          <p>Our site is intended for adults aged 50 and over. We do not knowingly collect information from anyone under 13.</p>
          <h2 className="text-2xl">6. Your rights</h2>
          <p>You may request deletion of your data at any time by emailing techeaseafter50@gmail.com. We will respond within 7 business days.</p>
          <h2 className="text-2xl">7. Contact</h2>
          <p>Tech Ease After 50, 740 Lakeview Plaza, Chicago, IL 60611, USA · techeaseafter50@gmail.com · (312) 555-8421</p>
        </div>
      </section>
    </>
  );
}
