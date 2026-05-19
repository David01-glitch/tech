import PageHeader from '../../components/PageHeader.jsx';

export default function Refund() {
  return (
    <>
      <PageHeader title="Refund Policy" subtitle="Last updated: May 1, 2026" />
      <section className="container-x py-12 max-w-3xl">
        <div className="card space-y-4 text-slate-700">
          <h2 className="text-2xl">Free content</h2>
          <p>All articles, guides, and tutorials on Tech Ease After 50 are free. No payment is ever required to read them.</p>
          <h2 className="text-2xl">Paid courses (if applicable)</h2>
          <p>If we offer a paid course or workbook in the future, you may request a full refund within 30 days of purchase, no questions asked. Email techeaseafter50@gmail.com with your order number.</p>
          <h2 className="text-2xl">How refunds are processed</h2>
          <p>Approved refunds return to the original payment method within 5–10 business days. Bank delays may add a few extra days on your statement.</p>
          <h2 className="text-2xl">Contact</h2>
          <p>For any refund questions, write to techeaseafter50@gmail.com or call (312) 555-8421 (Mon–Fri, 9am–5pm CT).</p>
        </div>
      </section>
    </>
  );
}
