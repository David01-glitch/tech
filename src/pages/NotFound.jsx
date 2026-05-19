import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="text-6xl font-heading text-brand-700 mb-4">404</p>
      <h1 className="text-3xl mb-4">Page Not Found</h1>
      <p className="text-slate-600 mb-8">The page you were looking for has moved or never existed. Don't worry — it happens to all of us.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </section>
  );
}
