import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon } from "lucide-react";

function CTA() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Ready When You Are
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            <span className="text-foreground">Your dental health</span>
            <br />
            <span className="text-primary">journey starts here</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Join 1,200+ patients who trust our AI for instant guidance and
            personalized care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
            <Button
              size="lg"
             className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MicIcon className="mr-2 h-4 w-4" />
              Start free chat
            </Button>
            <Button
              size="lg"
              variant="outline"
               className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Book appointment
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
          <div className="absolute top-0  transform -translate-x-1/2 -translate-y-1/2 bg-green-500/80 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            Available 24/7
          </div>

          <Image
            src="/cta.png"
            alt="Dentora AI Assistant"
            width={300}
            height={300}
            className="relative w-80 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default CTA;
