import CategoryTemplate from '../../components/CategoryTemplate.jsx';
import img from '../../assets/images/categories/smartphone.jpg';

const articles = [
  { title: 'Turning Your Phone On and Off',
    summary: 'The simplest gesture — but the foundation of every other skill.',
    body: ['Press and hold the button on the right side of your phone for about three seconds until you see the logo. To turn it off, hold the same button along with the volume-down button for a few seconds, then slide "Power off" across the screen.'] },
  { title: 'Understanding the Home Screen',
    summary: 'What all those little squares mean, and how to rearrange them.',
    body: ['Each picture (called an "icon") opens a different app. Press and hold any icon to enter "edit mode," then drag it where you want. Less-used icons can be dropped on top of each other to form a folder.'] },
  { title: 'Adjusting Text Size for Easier Reading',
    summary: 'Make every menu, email, and message bigger and bolder.',
    body: ['On iPhone: Settings → Display & Brightness → Text Size — drag the slider to the right. On Android: Settings → Display → Font size and style. You can also turn on "Bold Text" for extra clarity.'] },
  { title: 'Charging Your Phone the Right Way',
    summary: 'A few habits that make your battery last for years.',
    body: ['Use the cable that came with the phone. Most modern phones do best charged between 20% and 80%. Overnight charging is fine — phones stop pulling power when full.'] },
];

export default function SmartphoneBasics() {
  return <CategoryTemplate
    title="Smartphone Basics"
    subtitle="Everything you wish someone had explained the day you got your first smartphone."
    image={img}
    intro="Smartphones look complicated, but underneath they follow simple rules. Once you learn five or six gestures, the rest falls into place. This category is the friendliest place to begin."
    articles={articles} />;
}
