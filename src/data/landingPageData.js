// Landing Page Data and Constants

export const APP_NAME = 'Calcart';
export const PHONE_MOCKUP = 'phone2.png';

export const FEATURE_CARDS = [
  {
    id: 1,
    title: "Dein Geschmack. Deine Regeln.",
    icon: "🥗",
    description: "Kein 08/15 Plan. Wir lernen, was du magst. Vegan? Keto? Kein Koriander? Wir checken das.",
    color: "from-lime-400 to-emerald-500",
    size: "large"
  },
  {
    id: 2,
    title: "Smart Tracking",
    icon: "📉",
    description: "Verfolge deine Makros & Gewicht ohne Stress.",
    color: "from-teal-400 to-cyan-500",
    size: "small"
  },
  {
    id: 3,
    title: "Spar-Modus",
    icon: "💸",
    description: "Wir finden die günstigsten Preise für deine Zutaten.",
    color: "from-indigo-400 to-violet-500",
    size: "small"
  },
  {
    id: 4,
    title: "1-Click Delivery",
    icon: "🚚",
    description: "Einkaufszettel nerven. Lass dir alles direkt an die Haustür liefern.",
    color: "from-fuchsia-400 to-pink-500",
    size: "wide"
  }
];

export const LAUNCH_CITIES = [
  { city: "Wien", code: "VIE" },
  { city: "Berlin", code: "BER" },
  { city: "München", code: "MUC" },
  { city: "Zürich", code: "ZRH" },
  { city: "Hamburg", code: "HAM" }
];

export const NAV_LINKS = [
  { name: 'Startseite', href: '#' },
  { name: 'Funktionen', href: '#features' },
  { name: 'Städte', href: '#cities' },
  { name: 'Über uns', href: '#about' },
];

export const TEAM_MEMBERS = [
  {
    name: "Alexander Brunner",
    title: "Gründer & Chef",
    bio: "Alex hat Calcart gegründet, damit gesundes Essen für jeden einfach wird. Er kennt sich gut mit Technik aus und liebt gesundes Essen. Er leitet das Team und entwickelt die Ideen für Calcart.",
    imgSrc: process.env.PUBLIC_URL + '/img/team/Alex.jpg',
    placeholderInitials: 'AB'
  }
];

