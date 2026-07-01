import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  title: string;
  address: string;
  city: string;
  price: number;               // pcm in £
  bedrooms: number;
  bathrooms: number;
  area: number;                // sqft
  type: "House" | "Apartment" | "Cottage" | "Penthouse";
  status: "Available" | "Let Agreed" | "New";
  featured?: boolean;
  image: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "linthorpe-townhouse",
    title: "The Linthorpe Townhouse",
    address: "Linthorpe Road", city: "Middlesbrough",
    price: 1450, bedrooms: 4, bathrooms: 2, area: 1620,
    type: "House", status: "New", featured: true, image: p1,
    description: "A beautifully restored Victorian townhouse on one of Middlesbrough's most sought-after streets, offering generous family living, period detail and a landscaped rear garden.",
    features: ["Bay-fronted lounge", "Restored fireplaces", "Modern shaker kitchen", "South-facing garden", "Off-street parking", "EPC rating C"],
  },
  {
    id: "riverside-apartment",
    title: "Riverside Balcony Apartment",
    address: "Middlehaven", city: "Middlesbrough",
    price: 895, bedrooms: 2, bathrooms: 2, area: 780,
    type: "Apartment", status: "Available", featured: true, image: p2,
    description: "A bright two-bedroom apartment with a private balcony overlooking the marina, secure allocated parking and access to a residents' concierge.",
    features: ["Private balcony", "Concierge access", "Allocated parking", "Open-plan living", "Integrated appliances"],
  },
  {
    id: "acklam-semi",
    title: "Acklam Family Semi-Detached",
    address: "Acklam", city: "Middlesbrough",
    price: 1150, bedrooms: 3, bathrooms: 2, area: 1180,
    type: "House", status: "Available", featured: true, image: p3,
    description: "A charming semi-detached home in a friendly residential pocket, with a bay-fronted lounge, dining kitchen and a well-established garden.",
    features: ["Driveway", "Conservatory", "Garden office potential", "Close to schools"],
  },
  {
    id: "harbour-penthouse",
    title: "The Harbour Penthouse",
    address: "Waterside", city: "Middlesbrough",
    price: 1850, bedrooms: 3, bathrooms: 2, area: 1420,
    type: "Penthouse", status: "New", image: p4,
    description: "A wrap-around penthouse with panoramic city views, floor-to-ceiling glazing and a generous private terrace.",
    features: ["Wrap-around terrace", "Panoramic views", "Underfloor heating", "Concierge & gym"],
  },
  {
    id: "cottage-yarm",
    title: "The Yarm Cottage",
    address: "High Street", city: "Yarm",
    price: 1250, bedrooms: 2, bathrooms: 1, area: 940,
    type: "Cottage", status: "Available", image: p5,
    description: "A picture-perfect stone cottage in Yarm, brimming with character, exposed beams and a cosy courtyard garden.",
    features: ["Exposed beams", "Log burner", "Courtyard garden"],
  },
  {
    id: "coulby-mews",
    title: "Coulby Mews Townhouse",
    address: "Coulby Newham", city: "Middlesbrough",
    price: 975, bedrooms: 3, bathrooms: 2, area: 1090,
    type: "House", status: "Available", image: p6,
    description: "A contemporary mews-style townhouse with a private courtyard, integral garage and open-plan living space.",
    features: ["Integral garage", "Private courtyard", "En-suite to main", "EV-charging ready"],
  },
];

export function getProperty(id: string) {
  return properties.find((p) => p.id === id);
}

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);
