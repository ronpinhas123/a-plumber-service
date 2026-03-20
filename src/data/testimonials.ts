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
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    rating: 5,
    text: "A Plumber Service completely transformed our kitchen in Katy. The team was professional, clean, and finished ahead of schedule. The quartz countertops and custom cabinets look absolutely stunning. Our home value increased significantly and we couldn't be happier with the results!",
    date: "2024-09-15",
    avatar: "MG",
  },
  {
    id: 2,
    name: "James T.",
    city: "The Woodlands",
    citySlug: "the-woodlands-tx",
    service: "Bathroom Remodeling",
    serviceSlug: "bathroom-remodeling",
    rating: 5,
    text: "We hired A Plumber Service for a complete master bathroom renovation in The Woodlands. The walk-in shower with custom tile work is breathtaking. Ronnie and his team were communicative throughout the process and the craftsmanship exceeded our expectations. Highly recommend!",
    date: "2024-08-22",
    avatar: "JT",
  },
  {
    id: 3,
    name: "Linda R.",
    city: "Sugar Land",
    citySlug: "sugar-land-tx",
    service: "Flooring Installation",
    serviceSlug: "flooring-installation",
    rating: 5,
    text: "We had hardwood floors installed throughout our Sugar Land home and the results are incredible. The crew was meticulous about subfloor prep and the finished product is flawless. They even stayed late to make sure everything was perfect before they left.",
    date: "2024-10-05",
    avatar: "LR",
  },
  {
    id: 4,
    name: "Robert M.",
    city: "Spring",
    citySlug: "spring-tx",
    service: "Home Additions",
    serviceSlug: "home-additions",
    rating: 5,
    text: "We added a 500 sq ft bonus room and extended our master suite through A Plumber Service. The addition blends seamlessly with our Spring home — you'd never know it wasn't original. Professional crew, clean work site, and they handled every permit. Outstanding!",
    date: "2024-07-18",
    avatar: "RM",
  },
  {
    id: 5,
    name: "Sarah K.",
    city: "Pearland",
    citySlug: "pearland-tx",
    service: "Outdoor Living",
    serviceSlug: "outdoor-living",
    rating: 5,
    text: "A Plumber Service built our dream outdoor kitchen and covered patio in Pearland. The design is gorgeous, drainage works perfectly even in heavy rain, and the outdoor kitchen has become our favorite spot to entertain. Worth every penny!",
    date: "2024-11-02",
    avatar: "SK",
  },
  {
    id: 6,
    name: "David L.",
    city: "River Oaks",
    citySlug: "river-oaks-tx",
    service: "Bathroom Remodeling",
    serviceSlug: "bathroom-remodeling",
    rating: 5,
    text: "We've used several contractors in Houston over the years for our River Oaks home, and A Plumber Service is by far the best. Our bathroom remodel came in on budget, looks absolutely luxurious, and every detail was handled with care. They've earned a customer for life.",
    date: "2024-06-10",
    avatar: "DL",
  },
  {
    id: 7,
    name: "Jennifer W.",
    city: "Cypress",
    citySlug: "cypress-tx",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    rating: 5,
    text: "From the initial consultation to the final walkthrough, A Plumber Service made our Cypress kitchen remodel a wonderful experience. The team was respectful of our home, communicated every step of the way, and the end result is a magazine-worthy kitchen!",
    date: "2024-09-28",
    avatar: "JW",
  },
  {
    id: 8,
    name: "Michael B.",
    city: "Bellaire",
    citySlug: "bellaire-tx",
    service: "Flooring Installation",
    serviceSlug: "flooring-installation",
    rating: 5,
    text: "We had 1,800 square feet of luxury vinyl plank installed in our Bellaire home and the quality is exceptional. The installation team was fast, clean, and professional. The floors look beautiful and are holding up perfectly months later. Highly recommend A Plumber Service!",
    date: "2024-10-20",
    avatar: "MB",
  },
  {
    id: 9,
    name: "Patricia N.",
    city: "League City",
    citySlug: "league-city-tx",
    service: "Home Additions",
    serviceSlug: "home-additions",
    rating: 5,
    text: "A Plumber Service added a sunroom to our League City home and it has completely changed how we use our space. The design perfectly matches our home's architecture, the permits were all handled, and the craftsmanship is top-notch. Couldn't be more pleased!",
    date: "2024-08-05",
    avatar: "PN",
  },
  {
    id: 10,
    name: "Carlos E.",
    city: "Memorial",
    citySlug: "memorial-tx",
    service: "Outdoor Living",
    serviceSlug: "outdoor-living",
    rating: 5,
    text: "Our Memorial area backyard has been completely transformed. A Plumber Service built a stunning pergola with string lights, a built-in grill station, and a beautiful flagstone patio. The team was creative, professional, and delivered exactly what we envisioned.",
    date: "2024-07-30",
    avatar: "CE",
  },
  {
    id: 11,
    name: "Angela H.",
    city: "Humble",
    citySlug: "humble-tx",
    service: "Bathroom Remodeling",
    serviceSlug: "bathroom-remodeling",
    rating: 5,
    text: "We had two bathrooms completely remodeled in our Humble home. The tile work is beautiful, the fixtures are high quality, and the team cleaned up completely every day. A Plumber Service is honest, fairly priced, and does excellent work.",
    date: "2024-05-14",
    avatar: "AH",
  },
  {
    id: 12,
    name: "Thomas F.",
    city: "Friendswood",
    citySlug: "friendswood-tx",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    rating: 5,
    text: "Our Friendswood kitchen went from dated to absolutely spectacular. A Plumber Service handled everything — cabinets, countertops, tile backsplash, sink, and all the plumbing. Professional service from start to finish. We get compliments every time someone visits!",
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
