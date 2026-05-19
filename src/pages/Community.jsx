import PageHeader from '../components/PageHeader.jsx';
import margaret from '../assets/images/community/margaret.svg';
import robert from '../assets/images/community/robert.svg';
import linda from '../assets/images/community/linda.svg';
import david from '../assets/images/community/david.svg';
import susan from '../assets/images/community/susan.svg';

const stories = [
  { img: margaret, name: 'Margaret, 68, Boston', text: 'I had given up on figuring out FaceTime until I read the step-by-step guide here. Now my grandchildren call me every Sunday at 4pm — without fail.' },
  { img: robert, name: 'Robert, 72, Phoenix', text: 'A man called pretending to be from my bank, asking for an OTP. Because of the safety tips article, I knew exactly what to say: "I will call my bank directly." He hung up immediately.' },
  { img: linda, name: 'Linda, 65, Atlanta', text: 'I use ChatGPT every morning now to draft my emails. It saves me an hour and the writing is better than mine — though I still add my own voice.' },
  { img: david, name: 'David, 70, Seattle', text: 'I joined our local senior center\'s "tech tea" after reading about it here. We meet every Wednesday — and now I help newcomers learn what I learned.' },
  { img: susan, name: 'Susan, 63, Miami', text: 'The newsletter is the only one I keep. One tip a week is exactly the right pace — anything more and I get overwhelmed.' },
];

export default function Community() {
  return (
    <>
      <PageHeader title="Our Community" subtitle="Real readers, real progress. Welcome to the family." />
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map(s => (
            <div key={s.name} className="card flex gap-5 items-start">
              <img src={s.img} alt={s.name} className="w-20 h-20 rounded-full flex-shrink-0" loading="lazy" />
              <div>
                <p className="text-slate-700 italic mb-3">"{s.text}"</p>
                <p className="font-semibold text-brand-800">{s.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-12 text-center">
          <h2 className="text-2xl mb-3">Local Meet-ups Near You</h2>
          <p className="text-slate-600 mb-4">Many libraries and senior centers offer free weekly "tech help" hours. Call your nearest library and ask for "device help." It is one of the kindest, most useful services they offer.</p>
          <a href="mailto:techeaseafter50@gmail.com" className="btn-primary">Share Your Story</a>
        </div>
      </section>
    </>
  );
}
