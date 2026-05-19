import PageHeader from '../components/PageHeader.jsx';
import Expandable from '../components/Expandable.jsx';
import b1 from '../assets/images/blog/blog-1.svg';
import b2 from '../assets/images/blog/blog-2.svg';
import b3 from '../assets/images/blog/blog-3.svg';
import b4 from '../assets/images/blog/blog-4.svg';
import b5 from '../assets/images/blog/blog-5.svg';
import b6 from '../assets/images/blog/blog-6.svg';

const posts = [
  { img: b1, title: 'A Gentle Guide to Your First Smartphone', date: 'May 10, 2026', tag: 'Smartphone Basics',
    summary: 'Buying or unboxing your very first smartphone? Here is everything we wish someone had told us.',
    body: 'Most phones today are simpler than they look. Press and hold the small button on the right side for three seconds — that turns it on. Pick your language, then connect to Wi-Fi by tapping your home network name and typing the password from the back of your internet box. From there, the phone asks for an email address: if you have Gmail, use that on Android; if you use iCloud, use that on iPhone. Take it one screen at a time, and skip anything that asks for your credit card — you can add that later when needed.' },
  { img: b2, title: 'WhatsApp for Grandparents — The Complete Walkthrough', date: 'May 4, 2026', tag: 'Social Media',
    summary: 'Photos, voice notes, group chats with the whole family — all without a single confusing menu.',
    body: 'Install WhatsApp from the App Store (iPhone) or Play Store (Android). Open it, agree to the terms, and type in your phone number. WhatsApp sends you a 6-digit code by text — type it into the box that appears. Add your name and an optional photo. To send a message, tap the green pencil icon, pick a contact, type your note, and press the green arrow. For voice notes, hold down the microphone icon while you speak, then release.' },
  { img: b3, title: 'Five Online Scams to Recognize in 2026', date: 'Apr 26, 2026', tag: 'Online Safety',
    summary: 'Scammers are getting cleverer — but they still follow the same five patterns.',
    body: '1. The "bank fraud" call demanding an OTP. 2. The "delivery missed" text with a fake tracking link. 3. The grandparent emergency call asking for wire transfer. 4. The Microsoft "your computer is infected" pop-up. 5. The romance scam on social media. The common thread: urgency, secrecy, and a payment request. When you spot any two of those three, hang up or close the window and call a family member.' },
  { img: b4, title: 'How to Video-Call Your Grandchildren', date: 'Apr 18, 2026', tag: 'Apps',
    summary: 'FaceTime, WhatsApp video, or Google Meet — pick whichever your family uses.',
    body: 'On an iPhone, FaceTime is built in: tap the green camera icon in your contacts. On Android, Google Meet works the same way. If your family uses WhatsApp, open the person\'s chat and tap the camera icon in the top-right. Keep your face well-lit by a window in front of you, not behind, and prop the phone against a coffee mug so your arms don\'t get tired.' },
  { img: b5, title: 'Using ChatGPT to Write a Letter', date: 'Apr 11, 2026', tag: 'AI Tools',
    summary: 'A free assistant that helps you write thank-you notes, complaints, and birthday wishes.',
    body: 'Go to chat.openai.com on your computer or download the ChatGPT app. Type plainly what you want — for example: "Help me write a polite letter to my insurance company about an unpaid claim from March." ChatGPT will draft it. Read it carefully, change names and details to be accurate, and copy it into your email or paper.' },
  { img: b6, title: 'Keeping Your Passwords Safe Without Memorizing Them', date: 'Apr 3, 2026', tag: 'Online Safety',
    summary: 'A small notebook plus one strong "master phrase" is all you really need.',
    body: 'Buy a small notebook. Write one website per page: the address, your username, and a unique password you create. Use a "master phrase" formula like a song lyric + the website\'s first letter — for example "BlueMoon1965-G" for Gmail. Store the notebook in a drawer at home, not in your bag. For tech-comfortable readers, password managers like 1Password or Bitwarden do this automatically.' },
];

export default function Blog() {
  return (
    <>
      <PageHeader title="The Blog" subtitle="Honest, friendly articles you can actually finish reading." />
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(p => (
            <article key={p.title} className="card">
              <img src={p.img} alt={p.title} className="w-full h-52 object-cover rounded-xl mb-4" loading="lazy" />
              <div className="flex gap-3 text-sm text-slate-500 mb-2">
                <span className="text-brand-700 font-semibold">{p.tag}</span>
                <span>·</span>
                <span>{p.date}</span>
              </div>
              <h2 className="text-2xl mb-3">{p.title}</h2>
              <Expandable summary={p.summary}>
                <p>{p.body}</p>
              </Expandable>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
