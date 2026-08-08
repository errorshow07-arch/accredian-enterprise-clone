"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-800";

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#071A3D] px-6 py-24 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

        {/* LEFT */}
        <div className="text-white">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400" />

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
              Speak with our Advisor
            </p>
          </div>

          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Want to learn more about our{" "}
            <span className="text-blue-300">
              training solutions?
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100/70">
            Tell us about your organization and we'll help you find a
            training solution designed around your team's needs.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Tailored enterprise learning",
              "Industry-focused expertise",
              "Flexible delivery options",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-blue-100"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-sm text-blue-300">
                  ✓
                </span>

                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl text-green-600">
                ✓
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-950">
                Thank you!
              </h3>

              <p className="mt-3 max-w-sm text-slate-500">
                Your enquiry has been received. Our advisor will get in
                touch with you.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Enquire Now
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Let's build the right learning solution.
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in your details and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Work Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Domain + Candidates */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="domain" className={labelClass}>
                      Domain
                    </label>

                    <select
                      id="domain"
                      name="domain"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select domain
                      </option>

                      <option value="Technology">Technology</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                      <option value="Data & AI">Data & AI</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="candidates" className={labelClass}>
                      Number of Candidates
                    </label>

                    <input
                      id="candidates"
                      name="candidates"
                      type="number"
                      min="1"
                      placeholder="e.g. 50"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Delivery */}
                <div>
                  <label htmlFor="mode" className={labelClass}>
                    Mode of Delivery
                  </label>

                  <select
                    id="mode"
                    name="mode"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select delivery mode
                    </option>

                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className={labelClass}>
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="e.g. Gurgaon, Delhi, India"
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}

                  {!loading && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Your information will only be used to respond to your
                  enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}