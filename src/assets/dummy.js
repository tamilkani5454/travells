import sgHero from "./singapore-hero.jpg";
import myHero from "./malaysia-hero.jpg";
import heroBeach from "./hero-beach.jpg";
import sgGardens from "./singapore-gardens.jpg";
import myLangkawi from "./malaysia-langkawi.jpg";
import streetFood from "./street-food.jpg";
export const dummyPackages = [
    { id: 1, image: sgHero, title: "Singapore City Explorer", days: "4 Days / 3 Nights", people: "2-6", rating: 4.9, country: "Singapore", desc: "Explore Marina Bay, Sentosa, and more." },
    { id: 2, image: myHero, title: "KL & Highlands Escape", days: "5 Days / 4 Nights", people: "2-8", rating: 4.8, country: "Malaysia", desc: "Petronas Towers, Batu Caves, Cameron Highlands." },
    { id: 3, image: heroBeach, title: "Beach Paradise Combo", days: "7 Days / 6 Nights", people: "2-4", rating: 5.0, country: "Singapore", desc: "Singapore + Langkawi beach holiday." },
    { id: 4, image: streetFood, title: "Foodie Trail", days: "3 Days / 2 Nights", people: "2-10", rating: 4.7, country: "Singapore", desc: "Hawker centres, night markets, cooking class." },
    { id: 5, image: sgGardens, title: "Family Fun Package", days: "6 Days / 5 Nights", people: "4-8", rating: 4.8, country: "Singapore", desc: "Theme parks, gardens, and cultural tours." },
    { id: 6, image: myLangkawi, title: "Adventure Seeker", days: "5 Days / 4 Nights", people: "2-6", rating: 4.9, country: "Malaysia", desc: "Diving, trekking, and island hopping." },
];
export const dummyCountries = [
    {
        country: "singapore",
        title: "Experience Singapore's Rich Heritage",
        subtitle: "A Melting Pot of Cultures",
        description: ["Singapore's unique blend of Chinese, Malay, Indian, and Western influences creates a vibrant cultural tapestry. From Chinatown to Little India, every neighbourhood tells a story.", "Don't miss the legendary hawker centres where Michelin-starred meals cost less than $5. Try Hainanese chicken rice, laksa, and chilli crab for an authentic taste of Singapore."],
        img: sgGardens
    }, {
        country: "malaysia",
        title: "Discover Malaysia's Natural Wonders",
        subtitle: "From Rainforests to Coral Reefs",
        description: [
            "Malaysia is home to some of the world's oldest rainforests and incredible biodiversity. Explore lush jungles, limestone caves, and exotic wildlife in places like Taman Negara.",
            "Dive into crystal-clear waters at Sipadan, relax in Langkawi's tropical beaches, or enjoy the cool climate of Cameron Highlands with its scenic tea plantations."
        ],
        img: myLangkawi
    }
]

