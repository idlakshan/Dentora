import PricingCard, { Plan } from "../PricingCard";

const plans: Plan[] = [
  {
    title: "Free",
    price: "$0",
    description: "Essential dental appointment booking",
    features: [
      "Unlimited appointment booking",
      "Find dentists in your area",
      "Basic text chat support",
      "Appointment reminders",
    ],
    buttonText: "Get Started Free",
    buttonType: "signup",
  },
  {
    title: "AI Basic",
    price: "$9",
    description: "AI consultations + appointment booking",
    features: [
      "Everything in Free",
      "10 AI voice calls per month",
      "AI dental guidance & advice",
      "Symptom assessment",
      "Priority support",
      "Call history & recordings",
    ],
    buttonText: "Start AI Basic",
    buttonType: "button",
    featured: true,
    badge: "Most Popular",
  },
  {
    title: "AI Pro",
    price: "$19",
    description: "Unlimited AI consultations",
    features: [
      "Everything in AI Basic",
      "Unlimited AI voice calls",
      "Advanced AI dental analysis",
      "Personalized care plans",
      "24/7 priority AI support",
      "Detailed health reports",
    ],
    buttonText: "Upgrade to AI Pro",
    buttonType: "button",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 px-6 overflow-hidden bg-linear-to-b from-background via-muted/3 to-background">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">
              Simple Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose your
            </span>
            <br />
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AI dental plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book appointments for free and upgrade for unlimited AI
            consultations. Perfect for ongoing dental care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
