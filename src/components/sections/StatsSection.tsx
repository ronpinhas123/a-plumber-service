import { SITE_CONFIG } from "@/data/site-config";

const stats = [
  { value: SITE_CONFIG.yearsInBusiness, label: "Years in Business", suffix: "" },
  { value: SITE_CONFIG.projectsCompleted, label: "Projects Completed", suffix: "" },
  { value: SITE_CONFIG.citiesServed, label: "Cities Served", suffix: "" },
  { value: SITE_CONFIG.rating, label: "Star Rating", suffix: "/5" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-navy" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ value, label, suffix }) => (
            <div key={label} className="text-center group">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                {value}
                {suffix && <span className="text-2xl md:text-3xl">{suffix}</span>}
              </div>
              <div className="text-white/70 text-sm md:text-base font-medium">{label}</div>
              <div className="w-8 h-0.5 bg-gold/40 mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
