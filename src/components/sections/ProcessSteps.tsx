import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Call or fill out our form. We schedule a free in-home consultation to understand your project and discuss your vision, timeline, and budget.",
  },
  {
    step: "02",
    title: "Detailed Estimate",
    description: "We provide a transparent, itemized written estimate within 24–48 hours. No vague lump sums — you know exactly what every dollar pays for.",
  },
  {
    step: "03",
    title: "Expert Execution",
    description: "Our licensed craftsmen get to work on your schedule. Daily cleanup, respectful communication, and expert workmanship every step of the way.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "We complete a thorough walkthrough together. We don't close out any project until you're completely satisfied with every detail.",
  },
];

interface ProcessStepsProps {
  theme?: "light" | "dark";
}

export default function ProcessSteps({ theme = "light" }: ProcessStepsProps) {
  const bgClass = theme === "dark" ? "bg-navy" : "bg-white";

  return (
    <section className={`py-20 md:py-28 ${bgClass}`} aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
            subtitle="Getting started with A Plumber Service is simple. Here's what you can expect from your first call to project completion."
            theme={theme}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gold/20" aria-hidden="true" />

          {steps.map(({ step, title, description }, index) => (
            <div key={step} className="relative text-center group">
              {/* Step number */}
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:shadow-gold-lg transition-shadow relative z-10">
                <span className="font-serif font-bold text-navy text-xl">{step}</span>
              </div>
              <h3 className={`font-serif text-lg font-bold mb-3 ${theme === "dark" ? "text-white" : "text-navy"}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-white/70" : "text-gray-600"}`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
