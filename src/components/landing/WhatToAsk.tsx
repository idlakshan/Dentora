import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  const questions = [
    {
      question: "My tooth hurts when I bite down",
      answer:
        "Get immediate advice on pain management, possible causes, and when to see a dentist urgently",
      tags: ["Instant Response", "Pain Relief"],
    },
    {
      question: "How much does teeth whitening cost?",
      answer:
        "Compare treatment options, pricing ranges, and find the best whitening solution for your budget",
      tags: ["Cost Analysis", "Treatment Options"],
    },
    {
      question: "When should I replace my filling?",
      answer:
        "Learn about filling lifespan, warning signs of wear, and replacement timing guidance",
      tags: ["Preventive Care", "Maintenance"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
          <MessageCircleIcon className="w-4 h-4" />
          AI-Powered Conversations
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ask about <span className="text-primary">anything dental</span>
        </h2>
        <p className="text-gray-400 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base">
          From simple questions to complex concerns, our AI delivers expert-level guidance trained
          on thousands of real dental cases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl border border-primary/30 bg-transparent backdrop-blur-md shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageSquareIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                    <p className="font-semibold text-primary">{question.question}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30">
                    <p className="text-gray-300 text-sm">{question.answer}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {question.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 sm:p-6 rounded-2xl border border-primary/30 bg-transparent backdrop-blur-md flex items-center justify-center shadow hover:shadow-lg transition">
          <Image
            src="/confused.png"
            alt="AI Assistant"
            width={405}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;
