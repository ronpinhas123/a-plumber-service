import { Shield, Award, Star, Clock, Phone, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

const badges = [
  { icon: Shield, label: "Licensed & Insured", detail: "State of Texas" },
  { icon: Award, label: "20+ Years Experience", detail: "Since 2004" },
  { icon: Star, label: "4.9/5 Star Rating", detail: "500+ Reviews" },
  { icon: Clock, label: "Fast Response", detail: "Same-Day Available" },
  { icon: CheckCircle, label: "5,000+ Projects", detail: "Completed" },
  { icon: Phone, label: "Free Estimates", detail: "No Obligation" },
];

export default function TrustBadges() {
  return (
    <section className="bg-navy py-8 border-y border-white/10" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-2 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-white text-xs font-semibold leading-tight">{label}</p>
              <p className="text-white/50 text-xs">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
