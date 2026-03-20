export interface Testimonial {
  id: number;
  name: string;
  city: string;
  citySlug: string;
  service: string;
  serviceSlug: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria G.",
    city: "Katy",
    citySlug: "katy-tx",
    service: "Emergency Plumbing",
    serviceSlug: "emergency-plumbing",
    rating: 5,
    text: "We had a burst pipe at 2am on a Sunday and A Plumber Service answered immediately. A plumber was at our Katy home within the hour. They shut off the water, repaired the pipe, and saved us from serious water damage. Incredible response time and professional crew. Can't thank them enough!",
    date: "2024-09-15",
    avatar: "MG",
  },
  {
    id: 2,
    name: "James T.",
    city: "The Woodlands",
    citySlug: "the-woodlands-tx",
    service: "Water Heater Services",
    serviceSlug: "water-heater-services",
    rating: 5,
    text: "Our water heater stopped working on a Friday evening. A Plumber Service came out Saturday morning, diagnosed the problem, and installed a new tankless unit by noon. The team was professional, the new system is amazing, and our energy bills are already noticeably lower. Highly recommend!",
    date: "2024-08-22",
    avatar: "JT",
  },
  {
    id: 3,
    name: "Linda R.",
    city: "Sugar Land",
    citySlug: "sugar-land-tx",
    service: "Leak Detection & Repair",
    serviceSlug: "leak-detection-repair",
    rating: 5,
    text: "My water bill was mysteriously high for three months. A Plumber Service came out, used their detection equipment, and found a slab leak I never would have found on my own. They fixed it with minimal damage to my floors. Fast, professional, and the price was fair. Problem solved!",
    date: "2024-10-05",
    avatar: "LR",
  },
  {
    id: 4,
    name: "Robert M.",
    city: "Spring",
    citySlug: "spring-tx",
    service: "Sewer & Pipe Services",
    serviceSlug: "sewer-pipe-services",
    rating: 5,
    text: "All our drains were backing up and we smelled sewage in the yard. A Plumber Service ran a camera and found tree roots in our sewer line. They cleared it with hydro-jetting and showed us the before/after footage. Completely transparent process. Our Spring home is flowing perfectly now!",
    date: "2024-07-18",
    avatar: "RM",
  },
  {
    id: 5,
    name: "Sarah K.",
    city: "Pearland",
    citySlug: "pearland-tx",
    service: "Drain Cleaning",
    serviceSlug: "drain-cleaning",
    rating: 5,
    text: "We had a stubborn kitchen drain that no amount of store-bought cleaner would fix. A Plumber Service used their hydro-jetting equipment and it's been flowing perfectly ever since. Professional, clean, and they explained exactly what caused the blockage. Worth every penny!",
    date: "2024-11-02",
    avatar: "SK",
  },
  {
    id: 6,
    name: "David L.",
    city: "River Oaks",
    citySlug: "river-oaks-tx",
    service: "Leak Detection & Repair",
    serviceSlug: "leak-detection-repair",
    rating: 5,
    text: "I noticed a hot spot on my living room floor and suspected a slab leak. A Plumber Service confirmed it with non-invasive detection and offered me repair options without any pressure. The reroute they recommended saved my floors. Best plumbing experience I've had in 20 years in Houston.",
    date: "2024-06-10",
    avatar: "DL",
  },
  {
    id: 7,
    name: "Jennifer W.",
    city: "Cypress",
    citySlug: "cypress-tx",
    service: "Emergency Plumbing",
    serviceSlug: "emergency-plumbing",
    rating: 5,
    text: "Sewage backed up into our Cypress home on a Saturday. It was a nightmare situation. A Plumber Service arrived quickly, cleared the main line blockage, and got us back to normal. They were calm, efficient, and compassionate during a stressful time. Truly the best plumbers in Houston!",
    date: "2024-09-28",
    avatar: "JW",
  },
  {
    id: 8,
    name: "Michael B.",
    city: "Bellaire",
    citySlug: "bellaire-tx",
    service: "Sewer & Pipe Services",
    serviceSlug: "sewer-pipe-services",
    rating: 5,
    text: "Our Bellaire home is 60 years old and the galvanized pipes were finally failing. A Plumber Service repiped the whole house with PEX in just two days. They were organized, protected our furniture, and the water pressure and quality improvement is dramatic. Outstanding work!",
    date: "2024-10-20",
    avatar: "MB",
  },
  {
    id: 9,
    name: "Patricia N.",
    city: "League City",
    citySlug: "league-city-tx",
    service: "Water Heater Services",
    serviceSlug: "water-heater-services",
    rating: 5,
    text: "A Plumber Service replaced our 14-year-old water heater before it failed. They helped us choose the right size, pulled all the permits, and installed it quickly. They even showed me how to flush it annually for longer life. Professional, honest, and affordable. Will call them for everything!",
    date: "2024-08-05",
    avatar: "PN",
  },
  {
    id: 10,
    name: "Carlos E.",
    city: "Memorial",
    citySlug: "memorial-tx",
    service: "Drain Cleaning",
    serviceSlug: "drain-cleaning",
    rating: 5,
    text: "Multiple slow drains throughout our Memorial home turned out to be a partial main line blockage. A Plumber Service ran a camera, showed us exactly what was happening, and cleared it completely with hydro-jetting. Transparent, skilled, and the price was exactly what they quoted. Five stars!",
    date: "2024-07-30",
    avatar: "CE",
  },
  {
    id: 11,
    name: "Angela H.",
    city: "Humble",
    citySlug: "humble-tx",
    service: "Emergency Plumbing",
    serviceSlug: "emergency-plumbing",
    rating: 5,
    text: "A pipe under our kitchen sink let go on a Tuesday morning. A Plumber Service was at our Humble home within 90 minutes, fixed the pipe, and checked all the surrounding plumbing while they were there. They found a potential problem before it became one. Thorough, fast, and honest!",
    date: "2024-05-14",
    avatar: "AH",
  },
  {
    id: 12,
    name: "Thomas F.",
    city: "Friendswood",
    citySlug: "friendswood-tx",
    service: "Leak Detection & Repair",
    serviceSlug: "leak-detection-repair",
    rating: 5,
    text: "Found water damage under a wall in our Friendswood home and couldn't find the source. A Plumber Service used electronic detection to find a pinhole leak in the supply line inside the wall — minimal access, clean repair, and they patched the drywall opening too. Incredible service!",
    date: "2024-11-15",
    avatar: "TF",
  },
];

export function getTestimonialsByCity(citySlug: string): Testimonial[] {
  return testimonials.filter((t) => t.citySlug === citySlug).slice(0, 2);
}

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug).slice(0, 2);
}
