import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full bg-background py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
        <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
          <div className="flex items-center gap-2 px-4 py-2 w-72 mx-auto lg:mx-0 rounded-full border border-primary/20 bg-linear-to-r from-primary/10 to-primary/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              AI-Powered Dental Assistant
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Your dental</span>
            <br />
            <span className="text-primary">questions</span>
            <br />
            <span className="text-foreground">answered instantly</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Chat with our AI dental assistant for instant advice, book smart
            appointments, and get personalized care recommendations. Available
            24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <CalendarIcon className="h-5 w-5" />
                Book Appointment
              </Button>
            </SignUpButton>

            <SignUpButton mode="modal">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MicIcon className="h-5 w-5" />
                Talk to Assistant
              </Button>
            </SignUpButton>
          </div>
        </div>

        <div className="hidden lg:block absolute right-48 top-1/2 -translate-y-1/2">
          <Image
            src="/hero.png"
            alt="Dental platform preview"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
