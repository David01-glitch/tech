import CategoryTemplate from '../../components/CategoryTemplate.jsx';
import img from '../../assets/images/categories/online-safety.jpg';

const articles = [
  { title: 'Recognizing a Phishing Email',
    summary: 'Three quick checks that catch almost every scam.',
    body: ['Hover (not click) over any link and check the address that appears at the bottom of the screen — does it match the company\'s real website? Check the sender\'s email address, not just their name. And never trust an urgent request to "verify" your account.'] },
  { title: 'Creating Strong Passwords You Will Actually Remember',
    summary: 'Forget random gibberish — passphrases are stronger and easier.',
    body: ['Make a sentence: "BlueRoses-Bloom-In-1962" is far stronger than "p@ssw0rd1" and easier for you to recall. Use a different one for each important account. Write them in a small paper notebook kept in a drawer.'] },
  { title: 'What to Do If You Were Scammed',
    summary: 'Fast steps that limit the damage and may even recover funds.',
    body: ['Call your bank immediately and ask them to freeze the card. File a report at reportfraud.ftc.gov (in the US). Change the password on your email account first, then any other affected accounts. Tell a family member — there is no shame in being targeted.'] },
  { title: 'Two-Step Verification, Explained Simply',
    summary: 'A 30-second setup that stops 99% of password thieves.',
    body: ['When you log in, the website also sends a 6-digit code to your phone. Even if a scammer steals your password, they cannot enter without your phone. Turn it on for your email and bank first.'] },
];

export default function OnlineSafety() {
  return <CategoryTemplate
    title="Online Safety"
    subtitle="Simple habits that keep you, your money, and your photos safe."
    image={img}
    intro="Most online scams rely on three things: urgency, secrecy, and unfamiliar payment methods. Learn the patterns once, and you will spot them for the rest of your life."
    articles={articles} />;
}
