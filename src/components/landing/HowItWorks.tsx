import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const steps = [
  {
    num: 1,
    icon: "/audio.png",
    title: "Ask Questions",
    text: "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.",
    pills: ["24/7 Available", "Instant Response"],
  },
  {
    num: 2,
    icon: "/brain.png",
    title: "Get Expert Advice",
    text: "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.",
    pills: ["AI-Powered", "Personalized"],
  },
  {
    num: 3,
    icon: "/calendar.png",
    title: "Book & Get Care",
    text: "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.",
    pills: ["Verified Doctors", "Follow-up Care"],
  },
];

function HowItWorks() {
  return (
    <section id="how_it_works" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
          <ZapIcon className="w-4 h-4" />
          Simple Process
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          3 Easy Steps to{" "}
          <span className="text-primary">Better Dental Care</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Our process is simple, quick, and designed to make your dental care
          stress-free.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative p-6 rounded-xl border border-orange-500/50 bg-transparent backdrop-blur-md shadow-lg hover:shadow-xl transition text-center"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg">
              {step.num}
            </div>

            <div className="w-20 h-20 mt-7 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
              <Image src={step.icon} alt={step.title} width={80} height={80} />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {step.title}
            </h3>
            <p className="text-foreground mb-4">{step.text}</p>

            <div className="flex flex-wrap justify-center gap-2">
              {step.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-12">
        <SignUpButton mode="modal">
          <Button size="lg" className="flex items-center gap-2">
            Get Started
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
