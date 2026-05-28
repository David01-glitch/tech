import { Link } from 'react-router-dom';
import { useState } from 'react';
import Expandable from '../components/Expandable.jsx';
import { trackEvent } from '../utils/analytics.js';

import hero from '../assets/images/hero/hero-main.jpg';
import cSmart from '../assets/images/categories/smartphone.jpg';
import cAI from '../assets/images/categories/ai-tools.jpg';
import cSafety from '../assets/images/categories/online-safety.jpg';
import cSocial from '../assets/images/categories/social-media.jpg';
import cTut from '../assets/images/categories/tutorials.jpg';
import cApps from '../assets/images/categories/apps.jpg';
import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import margaret from '../assets/images/community/margaret.jpg';
import robert from '../assets/images/community/robert.jpg';
import linda from '../assets/images/community/linda.jpg';

const categories = [
  { img: cSmart, title: 'Smartphone Basics', desc: 'Learn how to use your iPhone or Android, step by step.', to: '/category/smartphone-basics' },
  { img: cAI, title: 'AI Tools for Seniors', desc: 'Use ChatGPT, voice assistants, and more — in plain English.', to: '/category/ai-tools-for-seniors' },
  { img: cSafety, title: 'Online Safety', desc: 'Avoid scams, protect your passwords, and stay safe online.', to: '/category/online-safety' },
  { img: cSocial, title: 'Social Media Help', desc: 'WhatsApp, Facebook, YouTube — connect with family easily.', to: '/category/social-media-help' },
  { img: cTut, title: 'Easy Tech Tutorials', desc: 'Friendly walkthroughs with screenshots and clear words.', to: '/category/easy-tech-tutorials' },
  { img: cApps, title: 'Everyday Apps', desc: 'Banking, maps, weather, video calls — explained simply.', to: '/category/everyday-apps' },
];

const guides = [
  { img: blog1, title: 'How to Set Up a New Smartphone in 10 Easy Steps', summary: 'From taking it out of the box to making your first call — we walk you through it slowly.', body: 'Start by inserting your SIM card if needed and pressing the power button on the side of the phone. The screen will guide you through choosing your language and connecting to your home Wi-Fi network. Sign in with an Apple ID (for iPhone) or Google Account (for Android) — if you do not have one, the phone will help you create it. Take your time, write your new password down on paper, and store it in a safe drawer. Finally, add your favorite people as contacts and try a test call to a friend.' },
  { img: blog2, title: 'Sending Photos to Grandchildren on WhatsApp', summary: 'Share special moments in seconds with a few simple taps.', body: 'Open WhatsApp and tap the chat with your grandchild. Tap the paperclip or "+" icon next to the message box, then choose "Gallery" or "Photo & Video Library." Select the picture you want and tap the green send arrow. You can also add a short message such as "Thinking of you!" before sending. Sent photos appear with two grey ticks first, and turn blue when read.' },
  { img: blog3, title: 'Using Voice Assistants to Make Life Easier', summary: 'Set timers, call family, and get answers just by speaking.', body: 'Say "Hey Siri" on an iPhone or "Hey Google" on Android, then ask in your normal voice: "Call my daughter," "Set a 10 minute timer," or "What is the weather tomorrow?" Speak clearly but at your usual pace — these tools are designed to understand natural speech. You can train them to recognize your voice in Settings → Siri or Google Assistant, which improves accuracy a lot.' },
];

const aiTools = [
  { name: 'ChatGPT', use: 'Ask questions and get clear, written answers — like having a patient grandchild on call.' },
  { name: 'Google Translate', use: 'Translate menus, signs and conversations in over 100 languages, even using your camera.' },
  { name: 'Be My Eyes', use: 'A free app that helps with low vision by describing what your camera sees.' },
  { name: 'Otter.ai', use: 'Turns spoken conversations into written notes — wonderful for doctor visits.' },
];

const safetyTips = [
  { t: 'Never share OTPs or passwords on the phone', d: 'No real bank, hospital, or government office will ever ask you for a one-time password (OTP).' },
  { t: 'Look for "https" and a small lock icon', d: 'Before typing card details, check that the website address starts with https:// and shows a lock.' },
  { t: 'Slow down before you click', d: 'Most scams use urgency — "act in 2 minutes!" Real services give you time.' },
  { t: 'Use a long passphrase, not a short password', d: '"BlueGarden-Mornings-1962" is far stronger than "blue123" and easier to remember.' },
];

const testimonials = [
  { img: margaret, name: 'Margaret, 68', text: 'I finally understood how to video-call my grandchildren in Boston. The step-by-step guide felt like a friend sitting next to me.' },
  { img: robert, name: 'Robert, 72', text: 'The online safety section saved me from a fake "bank" call. I now recognize the warning signs and feel much more confident.' },
  { img: linda, name: 'Linda, 65', text: 'I never thought I would use ChatGPT, but the AI Tools section made it so simple. I use it every day to write emails now.' },
];

const faqs = [
  { q: 'Is Tech Ease After 50 free to use?', a: 'Yes. All our written guides, tutorials, and safety tips are completely free to read. Some premium courses may be offered later — we will always be upfront about pricing.' },
  { q: 'I am completely new to smartphones. Where do I start?', a: 'Begin with our Smartphone Basics category. The guides start with the very first power-on and assume no prior knowledge.' },
  { q: 'Can I print the guides?', a: 'Yes — use your browser\'s File → Print menu. We design pages with large, readable type so they print clearly.' },
  { q: 'Do you offer one-on-one help?', a: 'Not yet, but our Community page lists local senior centers and online groups where volunteers offer free help.' },
  { q: 'How often do you publish new guides?', a: 'We add one or two new guides every week, focused on what readers tell us they are struggling with.' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    trackEvent('newsletter_signup', { location: 'home' });
    setDone(true);
    setEmail('');
  };
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-x py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand-700 font-semibold mb-3">Welcome — take your time.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Technology made simple, after 50.</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              Clear, friendly guides that help adults over 50 learn smartphones, apps, AI tools, online safety, and social media — without confusion or jargon.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/tutorials" className="btn-primary">Start Learning</Link>
              <Link to="/blog" className="btn-secondary">Read the Blog</Link>
            </div>
          </div>
          <img src={hero} alt="Senior-friendly technology learning illustration" className="w-full rounded-2xl shadow-soft" loading="lazy" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">Featured Categories</h2>
            <p className="text-slate-600">Pick a topic and learn at your own pace.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(c => (
              <Link key={c.title} to={c.to} className="card hover:shadow-lg transition group">
                <img src={c.img} alt={c.title} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
                <h3 className="text-xl mb-2 group-hover:text-brand-700">{c.title}</h3>
                <p className="text-slate-600 text-sm">{c.desc}</p>
                <span className="inline-block mt-3 text-brand-700 font-semibold">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEGINNER GUIDES */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">Beginner Tech Guides</h2>
            <p className="text-slate-600">Real questions from real readers — answered simply.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map(g => (
              <article key={g.title} className="card">
                <img src={g.img} alt={g.title} className="w-full h-44 object-cover rounded-xl mb-4" loading="lazy" />
                <h3 className="text-lg mb-3">{g.title}</h3>
                <Expandable summary={g.summary}>
                  <p>{g.body}</p>
                </Expandable>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI TOOLS */}
      <section className="py-16 bg-brand-50">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">AI Tools You Can Actually Use</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Don't let the words "artificial intelligence" worry you. These tools are designed to help, not confuse.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map(t => (
              <div key={t.name} className="card">
                <h3 className="text-xl mb-2">{t.name}</h3>
                <p className="text-slate-600 text-sm">{t.use}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/category/ai-tools-for-seniors" className="btn-primary">See All AI Guides</Link>
          </div>
        </div>
      </section>

      {/* ONLINE SAFETY */}
      <section className="py-16">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">Online Safety Tips</h2>
            <p className="text-slate-600">Four habits that stop most online scams in their tracks.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((s, i) => (
              <div key={i} className="card flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xl">{i + 1}</div>
                <div>
                  <h3 className="text-lg mb-1">{s.t}</h3>
                  <p className="text-slate-600 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">From Our Community</h2>
            <p className="text-slate-600">Real readers, real wins.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="card text-center">
                <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4" loading="lazy" />
                <p className="text-slate-700 italic mb-3">"{t.text}"</p>
                <p className="font-semibold text-brand-800">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-brand-700 text-white">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-3 text-white">One Friendly Email Each Week</h2>
          <p className="text-brand-100 mb-6">No spam. Just one new guide and one safety tip every Sunday morning.</p>
          {done ? (
            <p className="text-white font-semibold">Thank you — please check your inbox to confirm.</p>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-xl text-slate-900 max-w-sm" />
              <button type="submit" className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Questions readers ask us most often.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="card !p-0 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex justify-between items-center text-left p-5 hover:bg-brand-50 transition">
                  <span className="font-semibold text-brand-800 text-lg">{f.q}</span>
                  <span className="text-brand-600 text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-700">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">Get in Touch</h2>
            <p className="text-slate-600 mb-6">Stuck on something? Send us a note — we read every email.</p>
            <ul className="space-y-3 text-slate-700">
              <li><strong>Email:</strong> <a href="mailto:techeaseafter50@gmail.com" className="text-brand-700">techeaseafter50@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+13125558421" className="text-brand-700">(312) 555-8421</a></li>
              <li><strong>Address:</strong> 740 Lakeview Plaza, Chicago, IL 60611, USA</li>
            </ul>
          </div>
          <div className="card">
            <Link to="/contact" className="btn-primary w-full text-center">Open Contact Form →</Link>
            <p className="text-slate-500 text-sm mt-4">We usually reply within one business day.</p>
          </div>
        </div>
      </section>
    </>
  );
}
