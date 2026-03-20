export interface City {
  name: string;
  slug: string;
  state: string;
  county: string;
  zipCodes: string[];
  population: string;
  neighborhoods: string[];
  distanceFromHouston: string;
  landmarks: string[];
  nearbyCity: string;
  nearbyCities: string[];
  heroImageId: string;
  description: string;
  metaDescription: string;
  countyLink?: string;
}
