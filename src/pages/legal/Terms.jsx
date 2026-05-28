import PageHeader from '../../components/PageHeader.jsx';

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms & Conditions" subtitle="Last updated: May 1, 2026" />
      <section className="container-x py-12 max-w-3xl">
        <div className="card space-y-4 text-slate-700">
          <h2 className="text-2xl">1. Acceptance of Terms</h2>
          <p>By visiting techeaseafter50.com, you agree to these terms. If you disagree with any part, please discontinue use of the site.</p>
          <h2 className="text-2xl">2. Educational content only</h2>
          <p>All content is for educational and informational purposes. We are not licensed financial, medical, or legal advisors. Always verify critical steps with the official source — your bank, doctor, or attorney.</p>
          <h2 className="text-2xl">3. No warranty</h2>
          <p>Content is provided "as is." While we take great care, technology changes quickly and some instructions may become outdated. We are not liable for losses arising from following any guide.</p>
          <h2 className="text-2xl">4. Intellectual property</h2>
          <p>All text, images, and design are the property of Tech Ease After 50 unless otherwise noted. You may print pages for personal, non-commercial use.</p>
          <h2 className="text-2xl">5. Third-party links</h2>
          <p>Our guides may link to outside websites. We do not control or endorse their content.</p>
          <h2 className="text-2xl">6. Changes</h2>
          <p>We may update these terms occasionally. The "Last updated" date at the top tells you when.</p>
        </div>
      </section>
    </>
  );
}
