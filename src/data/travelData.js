export const destinations = [
  "Paris, France",
  "Bali, Indonesia",
  "Dubai, UAE",
  "Tokyo, Japan",
  "London, UK",
  "New York, USA",
  "Singapore, Singapore",
  "Bangkok, Thailand",
  "Rome, Italy",
  "Barcelona, Spain",
  "Amsterdam, Netherlands",
  "Istanbul, Turkey",
  "Sydney, Australia",
  "Maldives, Maldives",
  "Goa, India",
  "Jaipur, India",
  "Kerala, India",
  "Ladakh, India",
  "Manali, India",
  "Udaipur, India",
  "Agra, India",
  "Rishikesh, India",
  "Varanasi, India",
  "Mysore, India",
  "Ooty, India",
  "Coorg, India",
  "Chikmagalur, India",
  "Kashmir, India",
  "Shimla, India",
  "Darjeeling, India",
  "Phuket, Thailand",
  "Krabi, Thailand",
  "Kuala Lumpur, Malaysia",
  "Seoul, South Korea",
  "Kyoto, Japan",
  "Osaka, Japan",
  "Hong Kong, China",
  "Doha, Qatar",
  "Abu Dhabi, UAE",
  "Cairo, Egypt",
  "Cape Town, South Africa",
  "Marrakech, Morocco",
  "Santorini, Greece",
  "Athens, Greece",
  "Venice, Italy",
  "Florence, Italy",
  "Milan, Italy",
  "Prague, Czech Republic",
  "Vienna, Austria",
  "Zurich, Switzerland",
  "Lucerne, Switzerland",
  "Interlaken, Switzerland",
  "Berlin, Germany",
  "Munich, Germany",
  "Copenhagen, Denmark",
  "Stockholm, Sweden",
  "Oslo, Norway",
  "Reykjavik, Iceland",
  "Dublin, Ireland",
  "Edinburgh, Scotland",
  "Lisbon, Portugal",
  "Porto, Portugal",
  "Madrid, Spain",
  "Seville, Spain",
  "Nice, France",
  "Monaco, Monaco",
  "Los Angeles, USA",
  "Las Vegas, USA",
  "San Francisco, USA",
  "Miami, USA",
  "Chicago, USA",
  "Boston, USA",
  "Washington DC, USA",
  "Honolulu, USA",
  "Toronto, Canada",
  "Vancouver, Canada",
  "Montreal, Canada",
  "Mexico City, Mexico",
  "Cancun, Mexico",
  "Rio de Janeiro, Brazil",
  "Buenos Aires, Argentina",
  "Lima, Peru",
  "Machu Picchu, Peru",
  "Santiago, Chile",
  "Auckland, New Zealand",
  "Queenstown, New Zealand",
  "Melbourne, Australia",
  "Brisbane, Australia",
  "Gold Coast, Australia",
  "Fiji, Fiji",
  "Seychelles, Seychelles",
  "Mauritius, Mauritius",
  "Zanzibar, Tanzania",
  "Nairobi, Kenya",
  "Serengeti, Tanzania",
  "Petra, Jordan",
  "Jerusalem, Israel",
  "Mecca, Saudi Arabia",
  "Riyadh, Saudi Arabia",
  "Baku, Azerbaijan",
  "Tbilisi, Georgia",
  "Almaty, Kazakhstan",
  "Hanoi, Vietnam",
  "Ho Chi Minh City, Vietnam",
  "Da Nang, Vietnam",
  "Siem Reap, Cambodia",
  "Bora Bora, French Polynesia",
  "Hawaii, USA",
  "Tahiti, French Polynesia",
  "Moscow, Russia",
  "Saint Petersburg, Russia",
  "Helsinki, Finland",
  "Budapest, Hungary",
  "Brussels, Belgium",
  "Warsaw, Poland",
].map((place, index) => {
  const [title, country = "Global"] = place.split(", ");

  return {
    id: index + 1,
    title,
    country,
    image: `https://picsum.photos/900/650?random=${index + 1}`,
    rating: (4.5 + (index % 5) * 0.1).toFixed(1),
    reviews: 5000 + index * 437,
    tag:
      index % 5 === 0
        ? "Hidden Gem"
        : index % 5 === 1
        ? "Top Rated"
        : index % 5 === 2
        ? "Adventure"
        : index % 5 === 3
        ? "Luxury"
        : "Weekend Trip",
  };
});

export const hotels = [
  {
    id: 1,
    name: "Ocean Pearl Resort",
    location: "Goa, India",
    price: 4500,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "Dubai, UAE",
    price: 9500,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Paris Boutique Stay",
    location: "Paris, France",
    price: 7800,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Mountain View Retreat",
    location: "Manali, India",
    price: 5200,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Island Luxury Villa",
    location: "Bali, Indonesia",
    price: 11000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Urban Comfort Inn",
    location: "Singapore",
    price: 6900,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
];

export const restaurants = [
  {
    id: 1,
    name: "Spice Route Kitchen",
    location: "Bangalore, India",
    cuisine: "Indian",
    rating: 4.6,
    status: "Open Now",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Tokyo Bowl House",
    location: "Tokyo, Japan",
    cuisine: "Japanese",
    rating: 4.8,
    status: "Open Now",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Italian Street Cafe",
    location: "Rome, Italy",
    cuisine: "Italian",
    rating: 4.7,
    status: "Closing Soon",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Seaside Grill",
    location: "Goa, India",
    cuisine: "Seafood",
    rating: 4.5,
    status: "Open Now",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Paris Dessert Studio",
    location: "Paris, France",
    cuisine: "French",
    rating: 4.9,
    status: "Open Now",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Bangkok Street Bowl",
    location: "Bangkok, Thailand",
    cuisine: "Thai",
    rating: 4.6,
    status: "Open Now",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  },
];

export const activities = [
  {
    id: 1,
    title: "Desert Safari",
    location: "Dubai",
    category: "Adventure",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Island Hopping",
    location: "Bali",
    category: "Nature",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "City Night Walk",
    location: "Paris",
    category: "Culture",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "River Rafting",
    location: "Rishikesh",
    category: "Adventure",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Heritage Fort Tour",
    location: "Jaipur",
    category: "History",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Northern Lights Tour",
    location: "Iceland",
    category: "Nature",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=80",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Aman Sharma",
    rating: 4.8,
    message: "Travique made my Goa trip simple and budget-friendly.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    rating: 4.9,
    message: "Loved the hotel and restaurant recommendations.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    rating: 4.7,
    message: "AI planner and saved trips feature is very useful.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    rating: 4.8,
    message: "World search and best nearby places feature feels professional.",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    rating: 4.6,
    message: "Clean UI, fast search and useful travel tools.",
  },
  {
    id: 6,
    name: "Neha Singh",
    rating: 4.9,
    message: "The saved trips and AI planner helped me organize my vacation.",
  },
];