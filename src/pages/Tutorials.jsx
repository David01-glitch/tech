import PageHeader from '../components/PageHeader.jsx';
import Expandable from '../components/Expandable.jsx';
import t1 from '../assets/images/tutorials/tutorial-1.jpg';
import t2 from '../assets/images/tutorials/tutorial-2.jpg';
import t3 from '../assets/images/tutorials/tutorial-3.jpg';
import t4 from '../assets/images/tutorials/tutorial-4.jpg';

const tuts = [
  { img: t1, title: 'Setting Up Wi-Fi at Home', time: '6 min',
    summary: 'A clear walkthrough — from finding the password sticker to connecting every device.',
    body: 'Flip your internet box upside down — most have a sticker with the network name and password. On your phone, open Settings → Wi-Fi. Tap the name that matches the sticker. Type the password exactly, paying attention to capital letters. Once connected, you will see a small Wi-Fi fan icon at the top of your screen.' },
  { img: t2, title: 'Backing Up Your Photos to the Cloud', time: '8 min',
    summary: 'So you never lose a picture again, even if your phone breaks.',
    body: 'On iPhone: Settings → tap your name → iCloud → Photos → turn on "Sync this iPhone." On Android: open the Google Photos app → tap your profile → Photos Settings → Backup → On. Choose "Wi-Fi only" to avoid using your data plan. Your photos will quietly upload over the next day or two.' },
  { img: t3, title: 'Sending a Text Message with a Photo', time: '4 min',
    summary: 'The everyday skill every grandparent should have.',
    body: 'Open Messages. Tap the pencil icon to start a new message. Type the person\'s name in the "To:" field. Tap the camera or "+" icon next to the typing area. Choose "Photo Library," tap the picture you want, then tap the blue arrow to send.' },
  { img: t4, title: 'Making a Free Video Call with Family', time: '7 min',
    summary: 'Pick a single app and use it well — that is the real trick.',
    body: 'For most families, WhatsApp is easiest because it works on both iPhone and Android. Open the chat with the person you want to call, tap the camera icon at the top right, and wait. If the person is busy, the call ends automatically after about a minute. Use headphones or earbuds for the clearest sound.' },
];

export default function Tutorials() {
  return (
    <>
      <PageHeader title="Easy Tech Tutorials" subtitle="Short, calm walkthroughs you can pause and restart any time." />
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {tuts.map(t => (
            <article key={t.title} className="card">
              <img src={t.img} alt={t.title} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="text-sm text-slate-500 mb-2">⏱ {t.time} read</div>
              <h2 className="text-2xl mb-3">{t.title}</h2>
              <Expandable summary={t.summary} buttonLabel="Learn More">
                <p>{t.body}</p>
              </Expandable>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
