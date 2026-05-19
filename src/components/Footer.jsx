import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-50 mt-16">
      <div className="container-x py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-white text-xl mb-3">Tech Ease After 50</h3>
          <p className="text-sm text-brand-100">Friendly, easy-to-understand technology help for adults over 50.</p>
        </div>
        <div>
          <h4 className="text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/tutorials" className="hover:text-white">Tutorials</Link></li>
            <li><Link to="/community" className="hover:text-white">Community</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category/smartphone-basics" className="hover:text-white">Smartphone Basics</Link></li>
            <li><Link to="/category/ai-tools-for-seniors" className="hover:text-white">AI Tools</Link></li>
            <li><Link to="/category/online-safety" className="hover:text-white">Online Safety</Link></li>
            <li><Link to="/category/social-media-help" className="hover:text-white">Social Media</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-brand-100">
            <li>740 Lakeview Plaza<br/>Chicago, IL 60611, USA</li>
            <li><a href="mailto:techeaseafter50@gmail.com" className="hover:text-white">techeaseafter50@gmail.com</a></li>
            <li><a href="tel:+13125558421" className="hover:text-white">(312) 555-8421</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-800">
        <div className="container-x py-5 flex flex-col md:flex-row gap-3 justify-between text-sm text-brand-100">
          <p>© {new Date().getFullYear()} Tech Ease After 50. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/refund" className="hover:text-white">Refund</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
