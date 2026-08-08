"use client";

import { useState } from "react";

const faqGroups = [
  {
    title: "About the Course",
    questions: [
      {
        question: "What kind of training programs does Accredian offer?",
        answer:
          "Accredian offers specialized enterprise learning programs across product and innovation, Gen-AI, leadership, technology and data, operations, digital enterprise, and fintech.",
      },
      {
        question: "Can the training be customized for our organization?",
        answer:
          "Yes. Programs can be tailored according to the organization's requirements, industry, topic, program, and participant level.",
      },
      {
        question: "Who can participate in these programs?",
        answer:
          "The programs are designed for tech professionals, non-tech professionals, emerging professionals, and senior professionals.",
      },
    ],
  },
  {
    title: "About the Delivery",
    questions: [
      {
        question: "How are the training programs delivered?",
        answer:
          "Training can be structured around the organization's requirements and delivered through a flexible program format.",
      },
      {
        question: "Can you train large teams?",
        answer:
          "Yes. Enterprise programs are designed to support teams and organizations with different learning requirements.",
      },
      {
        question: "How do you identify our team's learning needs?",
        answer:
          "The CAT framework begins with Skill Gap Analysis to understand the capabilities that need to be developed before creating the training plan.",
      },
    ],
  },
  {
    title: "Miscellaneous",
    questions: [
      {
        question: "How can I learn more about the available solutions?",
        answer:
          "You can enquire through the Enquire Now form and speak with an Accredian advisor about your organization's training requirements.",
      },
      {
        question: "Can the program be designed for different experience levels?",
        answer:
          "Yes. Course segmentation can be based on the participant's professional level, from emerging professionals to senior professionals.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-12"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              Frequently Asked Questions
            </p>

            <span className="h-px w-10 bg-blue-600" />
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Everything you{" "}
            <span className="text-blue-600">need to know.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Quick answers to common questions about our enterprise learning
            solutions.
          </p>
        </div>

        {/* FAQ groups */}
        <div className="mt-16 space-y-12">
          {faqGroups.map((group) => (
            <div key={group.title}>
              {/* Group title */}
              <div className="mb-5 flex items-center gap-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {group.title}
                </h3>

                <span className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {group.questions.map((faq, index) => {
                  const id = `${group.title}-${index}`;
                  const isOpen = open === id;

                  return (
                    <div
                      key={id}
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-blue-200 bg-white shadow-lg shadow-blue-600/5"
                          : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-md"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(id)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                      >
                        <span
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isOpen
                              ? "text-blue-600"
                              : "text-slate-900"
                          }`}
                        >
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* Animated answer */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-slate-100 px-6 pb-7 pt-5 sm:px-8">
                            <p className="max-w-3xl leading-7 text-slate-500">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-blue-600 px-8 py-10 text-center text-white shadow-xl shadow-blue-600/20">
          <p className="text-xl font-semibold">
            Still have questions?
          </p>

          <p className="mt-2 text-blue-100">
            Speak with our advisor to find the right training solution.
          </p>

          <a
            href="#enquiry"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Enquire Now
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}