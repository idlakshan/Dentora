import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

export type Plan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonType?: "signup" | "button";
  featured?: boolean;
  badge?: string;
};


function PricingCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;

  return (
    <div
      className={`relative group rounded-3xl p-8 border transition-all duration-500 ${
        isFeatured
          ? "scale-105 z-10 border-2 border-primary/30 shadow-xl hover:shadow-2xl hover:shadow-primary/20 -mt-6"
          : "border-2 hover:border-primary/30 shadow hover:shadow-2xl hover:shadow-primary/10"
      } bg-linear-to-br from-card/95 to-card/70 backdrop-blur-xl`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
          {plan.badge}
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{plan.title}</h3>
          <div className="flex items-end gap-1">
            <span
              className={`text-4xl font-bold ${
                isFeatured ? "bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent" : ""
              }`}
            >
              {plan.price}
            </span>
            <span className="text-muted-foreground mb-1">/month</span>
          </div>
          <p className="text-muted-foreground">{plan.description}</p>
        </div>

        {plan.buttonType === "signup" ? (
          <SignUpButton mode="modal">
            <Button className="w-full py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
              {plan.buttonText}
            </Button>
          </SignUpButton>
        ) : (
          <Button className="w-full py-3 bg-linear-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            {plan.buttonText}
          </Button>
        )}

        <div className="space-y-3">
          {plan.features.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;