import CategoryTemplate from '../../components/CategoryTemplate.jsx';
import img from '../../assets/images/categories/apps.jpg';

const articles = [
  { title: 'Banking Apps: Safer Than You Think',
    summary: 'Check balances, pay bills, and transfer money — without leaving the couch.',
    body: ['Download the app directly from your bank\'s website link. Set up the same security questions you use in-branch. Always log out when finished and never use a banking app on shared Wi-Fi (like a coffee shop).'] },
  { title: 'Google Maps for Driving and Walking',
    summary: 'Type any address — the friendly voice takes you turn by turn.',
    body: ['Open Google Maps, tap the search bar, type the address. Tap "Directions" → choose car, walking, or bus. Hit "Start" and place your phone on the dashboard. It will speak each turn before you reach it.'] },
  { title: 'Weather Apps That Are Actually Accurate',
    summary: 'Hourly forecasts, rain timing, and severe weather alerts.',
    body: ['Apple Weather (built into iPhone) and Google Weather (Android) are both excellent. For very accurate hour-by-hour rain, try the free "Carrot Weather" or "AccuWeather" app.'] },
  { title: 'Video Calling: FaceTime, WhatsApp, or Zoom?',
    summary: 'Pick one and stick with it — that is the real secret.',
    body: ['If your family all uses iPhone, FaceTime is simplest. If you have a mix of iPhone and Android, WhatsApp works for everyone. Zoom is best for larger family gatherings of 5 or more people.'] },
];

export default function EverydayApps() {
  return <CategoryTemplate
    title="Everyday Apps"
    subtitle="The apps you really use every day, explained without jargon."
    image={img}
    intro="You don't need 200 apps. You need five or six that work well and are easy to use. This category walks through each one with kindness and clarity."
    articles={articles} />;
}
