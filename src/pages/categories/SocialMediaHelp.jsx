import CategoryTemplate from '../../components/CategoryTemplate.jsx';
import img from '../../assets/images/categories/social-media.svg';

const articles = [
  { title: 'Facebook for Staying Close to Family',
    summary: 'See photos and life updates from people who matter — without getting lost in noise.',
    body: ['When you log in, you will see a "News Feed." Click "Friends" on the left to see only your friends\' posts, hiding ads and strangers. Use the search bar at the top to find anyone — type their full name and a city if it is common.'] },
  { title: 'WhatsApp: The Daily Family Lifeline',
    summary: 'Chats, voice notes, photo sharing, and video calls all in one app.',
    body: ['Create a family group: tap the three-dot menu → "New group." Add the people you want, give it a name like "Family ❤️," and tap the green check. Long-press the microphone to send a voice message — perfect when typing feels slow.'] },
  { title: 'YouTube: Watch Without Getting Distracted',
    summary: 'Find the videos you want and skip the rest.',
    body: ['Use the search bar — be specific: "how to plant tomatoes in pots" beats "gardening." Subscribe to two or three channels you really enjoy by tapping the red "Subscribe" button. Then visit your "Subscriptions" tab to see only those creators.'] },
  { title: 'Avoiding Information Overload',
    summary: 'A 10-minute weekly habit that keeps social media calm.',
    body: ['Once a week, click "Unfollow" on any account that makes you feel anxious or angry. You stay friends — you just won\'t see their posts. Most readers say this single habit transformed their experience.'] },
];

export default function SocialMediaHelp() {
  return <CategoryTemplate
    title="Social Media Help"
    subtitle="Stay connected with family — and skip the noise."
    image={img}
    intro="Social media at its best is a window to the people you love. We will show you how to set it up so it feels that way, not like a noisy room full of strangers."
    articles={articles} />;
}
