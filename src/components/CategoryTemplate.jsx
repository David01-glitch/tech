import PageHeader from './PageHeader.jsx';
import Expandable from './Expandable.jsx';

export default function CategoryTemplate({ title, subtitle, image, intro, articles }) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <section className="container-x py-12 md:py-16">
        <div className="card mb-10 grid md:grid-cols-2 gap-6 items-center">
          <img src={image} alt={title} className="w-full rounded-xl" loading="lazy" />
          <p className="text-slate-700 leading-relaxed">{intro}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map(a => (
            <article key={a.title} className="card">
              <h2 className="text-xl mb-3">{a.title}</h2>
              <Expandable summary={a.summary}>
                {a.body.map((p, i) => <p key={i}>{p}</p>)}
              </Expandable>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
