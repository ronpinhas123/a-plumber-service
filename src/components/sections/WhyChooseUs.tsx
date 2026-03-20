import { Shield, Users, Clock, ThumbsUp, Award, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/data/site-config";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description: "We carry full general liability insurance and are licensed by the State of Texas. You're fully protected on every project, no exceptions.",
  },
  {
    icon: Users,
    title: "20+ Years Serving Houston",
    description: "Since 2004, A Plumber Service has been Houston's trusted name in plumbing. Thousands of satisfied homeowners can't be wrong.",
  },
  {
    icon: Award,
    title: "Licensed Plumbers Only",
    description: "Every job is handled by licensed, experienced plumbers — never handymen or unskilled labor. We stand behind every repair and installation we perform.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "We respect your time and your home. Same-day service available for emergencies, with clear arrival windows and communication from start to finish.",
  },
  {
    icon: ThumbsUp,
    title: "Transparent Pricing",
    description: "Free detailed estimates with no hidden fees. Our itemized quotes tell you exactly what you're paying for before work begins. No surprises, ever.",
  },
  {
    icon: Zap,
    title: "24/7 Emergency Service",
    description: "Plumbing emergencies don't keep business hours. A Plumber Service is available around the clock for burst pipes, sewage backups, and flooding.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why Houston Homeowners Choose ${SITE_CONFIG.name}`}
            subtitle="With hundreds of competitors in Houston, here's why thousands of families have trusted us with their most important investment — their home."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
