import type { ITravelData } from "@interfaces/ITravelData";

export const TravelsData : ITravelData[] = [{
  id: 1,
  destination: "Paris",
  description: "Weekend à Paris",
  imageUrl: "/paris.jpg",
  price: 399,
  reducedPrice: 299,
  duration: "2 nuits + petit-déj",
  location: "Proche Tour Eiffel",
  details: ""
}, 
{
  id: 2,
  destination: "Tokyo",
  description: "Cap sur Tokyo",
  imageUrl: "/tokyo.jpg",
  price: 1599,
  reducedPrice: 1199,
  duration: "7 nuits",
  location: "Shinjuku",
  details: "Vol A/R"
},
{
  id: 3,
  destination: "Bali",
  description: "Bali détente",
  imageUrl: "/bali.jpg",
  price: 1299,
  reducedPrice: 999,
  duration: "10 jours",
  location: "Villa & Spa",
  details: "Petit-déj"
},
{
  id: 4,
  destination: "Londres",
  description: "City break Londres",
  imageUrl: "/londres.jpg",
  price: 349,
  reducedPrice: 279,
  duration: "2 nuits",
  location: "Westminster",
  details: "Eurostar"
}
];