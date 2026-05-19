import CategoryTemplate from '../../components/CategoryTemplate.jsx';
import img from '../../assets/images/categories/tutorials.svg';

const articles = [
  { title: 'Connecting Bluetooth Headphones',
    summary: 'Listen to your music or audiobooks without disturbing anyone.',
    body: ['Hold the power button on your headphones for 5 seconds until the light flashes blue. On your phone, open Settings → Bluetooth → tap your headphone\'s name when it appears in the list. They will reconnect automatically every time after that.'] },
  { title: 'Printing from Your Phone',
    summary: 'Yes — your phone can print, often without a single cable.',
    body: ['If your printer supports Wi-Fi, connect it to the same Wi-Fi as your phone. Then in any document, tap "Share" → "Print" → choose your printer. The first time takes a minute, but every print after is instant.'] },
  { title: 'Resetting a Forgotten Password',
    summary: 'A polite, step-by-step recovery — no panic needed.',
    body: ['On the login screen, click "Forgot password." The site emails you a link — click it, and create a new one. Tip: always have a paper notebook ready before starting, so you can write it down right away.'] },
  { title: 'Updating Your Phone Safely',
    summary: 'Updates fix bugs and security holes — but timing matters.',
    body: ['Plug your phone into power and connect to Wi-Fi before tapping "Update." Updates can take 20–30 minutes. Do it overnight or while you have a cup of tea — never just before you need to use the phone.'] },
];

export default function EasyTechTutorials() {
  return <CategoryTemplate
    title="Easy Tech Tutorials"
    subtitle="Friendly step-by-step lessons on the everyday tasks that used to feel impossible."
    image={img}
    intro="Each tutorial here breaks one task into clear steps. Read once, then try it with your phone in hand — you will surprise yourself with how quickly it sticks."
    articles={articles} />;
}
