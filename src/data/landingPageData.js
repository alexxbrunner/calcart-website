// Landing Page Data and Constants

export const APP_NAME = 'Calcart';
export const PHONE_MOCKUP = 'phone2.png';

export const FEATURE_CARDS = [
  {
    id: 1,
    title: "Mahlzeiten nach deinem Geschmack",
    icon: "🍲",
    description: "Dein Geschmack, deine Regeln. Wir planen Speisen, die zu dir passen – egal ob Low Carb, vegan oder du einfach nur Bananen hasst. Auf dein Ziel und Budget abgestimmt.",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: 2,
    title: "Deine Gewichtsziele im Blick",
    icon: "⚖️",
    description: "Schluss mit den ständigen Gewichtsschwankungen. Tracke deine Fortschritte ohne Stress und sieh in coolen Grafiken, wie du vorankommst.",
    color: "from-sky-400 to-blue-500"
  },
  {
    id: 3,
    title: "Günstig einkaufen",
    icon: "🛒",
    description: "Gutes Essen muss nicht teuer sein. Unsere smarten Listen zeigen dir, wo du sparen kannst, ohne bei der Qualität Abstriche zu machen.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 4,
    title: "Rezepte, die zu dir passen",
    icon: "📝",
    description: "Von schnellen 15-Minuten-Gerichten bis zum Sonntagsbraten – für jedes Level und jeden Geschmack ist was dabei. Auch wenn du nur eine Mikrowelle bedienen kannst.",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 5,
    title: "Direkt liefern lassen",
    icon: "🚚",
    description: "Keine Lust auf Einkaufsmarathon nach der Arbeit? Lass dir alles liefern oder bestell fertige Mahlzeiten mit einem Klick, wenn's mal schnell gehen muss.",
    color: "from-purple-400 to-indigo-500"
  }
];

export const LAUNCH_CITIES = [
  { city: "Wien", country: "Österreich", icon: "🇦🇹" },
  { city: "München", country: "Deutschland", icon: "🇩🇪" },
  { city: "Zürich", country: "Schweiz", icon: "🇨🇭" },
  { city: "Berlin", country: "Deutschland", icon: "🇩🇪" },
  { city: "Köln", country: "Deutschland", icon: "🇩🇪" },
  { city: "Frankfurt", country: "Deutschland", icon: "🇩🇪" },
  { city: "Hamburg", country: "Deutschland", icon: "🇩🇪" }
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

