const testimonials = [
  {
    company: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    company: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: "Reliance",
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#071A3D] px-6 py-24 text-white lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                Testimonials from Our Partners
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              What our{" "}
              <span className="text-blue-300">clients say.</span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-blue-100/60 lg:justify-self-end">
            Trusted by organizations that value meaningful learning,
            practical expertise, and long-term impact.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.company}
              className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-blue-950/40 lg:p-10"
            >
              {/* Quote mark */}
              <div className="text-7xl font-serif leading-none text-blue-400/30 transition-colors duration-500 group-hover:text-blue-300/50">
                “
              </div>

              {/* Quote */}
              <p className="mt-3 flex-1 text-lg leading-8 text-blue-50/80">
                {testimonial.quote}
              </p>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold tracking-tight">
                    {testimonial.company}
                  </p>

                  <p className="mt-1 text-sm text-blue-100/50">
                    Enterprise Partner
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-blue-300 transition-all duration-500 group-hover:translate-x-1 group-hover:border-blue-300 group-hover:bg-blue-400 group-hover:text-white">
                  →
                </div>
              </div>

              {/* Number */}
              <span className="pointer-events-none absolute -right-3 -top-8 text-[130px] font-black leading-none text-white/[0.025]">
                0{index + 1}
              </span>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-blue-100/40">
          <span className="h-px w-12 bg-blue-300/20" />
          <span>Partnerships that create lasting impact</span>
          <span className="h-px w-12 bg-blue-300/20" />
        </div>
      </div>
    </section>
  );
}