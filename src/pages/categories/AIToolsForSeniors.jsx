import CategoryTemplate from '../../components/CategoryTemplate.jsx';
import img from '../../assets/images/categories/ai-tools.svg';

const articles = [
  { title: 'What is ChatGPT, in Plain English?',
    summary: 'A patient digital helper that answers questions, writes letters, and explains things slowly.',
    body: ['ChatGPT is a free website (chat.openai.com) where you type a question and it writes back. Treat it like a knowledgeable friend: ask in normal sentences, and ask follow-ups if anything is unclear.'] },
  { title: 'Using Siri and Google Assistant',
    summary: 'Hands-free help built right into your phone.',
    body: ['Say "Hey Siri" on iPhone or "Hey Google" on Android, then ask: "Call my son," "What\'s the weather?" or "Set a 5 minute timer." If it doesn\'t hear you the first time, speak slightly louder — not faster.'] },
  { title: 'Be My Eyes: An AI Helper for Low Vision',
    summary: 'Point your camera at anything — and have it described to you out loud.',
    body: ['Download "Be My Eyes" from the App Store or Play Store — it is completely free. Tap "Be My AI" inside the app, point at a label or letter, and it reads it aloud. If the AI is unsure, you can be connected to a real human volunteer.'] },
  { title: 'Translating Foreign Languages with Your Camera',
    summary: 'Restaurants, road signs, medicine labels — all in seconds.',
    body: ['Open Google Translate, tap the camera icon, point at the foreign text, and watch the translation appear right on top of the image. Useful for menus abroad and for translating letters from family overseas.'] },
];

export default function AIToolsForSeniors() {
  return <CategoryTemplate
    title="AI Tools for Seniors"
    subtitle="Artificial intelligence sounds intimidating — these tools are just very polite, very fast helpers."
    image={img}
    intro="AI is just a new word for software that can understand sentences and pictures. The tools in this section are free, gentle, and surprisingly useful — many of our readers say they cannot remember life before them."
    articles={articles} />;
}
