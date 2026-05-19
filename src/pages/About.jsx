import PageHeader from '../components/PageHeader.jsx';

export default function About() {
  return (
    <>
      <PageHeader title="About Tech Ease After 50" subtitle="A friendly corner of the internet built for grown-ups who deserve patient, jargon-free tech help." />
      <section className="container-x py-16 max-w-3xl">
        <div className="card space-y-5 text-slate-700">
          <p>Tech Ease After 50 began in 2022 around a kitchen table in Chicago, when our founder watched her mother struggle through a 40-minute customer service call just to reset a password. We realized that the world had built technology that was wonderful — and almost no one was teaching it kindly.</p>
          <h2 className="text-2xl pt-4">What we believe</h2>
          <p>Every adult, regardless of age, deserves to feel competent and confident using the tools that now run our daily lives — banking, video calls with family, online shopping, doctor appointments. We believe in slow words, big screenshots, and never making readers feel small for asking a question.</p>
          <h2 className="text-2xl pt-4">What we publish</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Step-by-step guides for iPhone and Android</li>
            <li>Honest reviews of AI tools that genuinely help</li>
            <li>Plain-English explanations of scams and how to avoid them</li>
            <li>Tutorials for the apps you actually use — WhatsApp, FaceTime, banking, maps</li>
          </ul>
          <h2 className="text-2xl pt-4">Our promise</h2>
          <p>We will never use a buzzword when a plain word will do. We will always include screenshots. And if something on this site confuses you, write to us at techeaseafter50@gmail.com — that is a real inbox we read.</p>
        </div>
      </section>
    </>
  );
}
