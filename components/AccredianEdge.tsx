const features = [
  {
    number: "01",
    title: "Industry-Relevant Learning",
    description:
      "Programs built around the skills, technologies, and challenges shaping modern enterprises.",
  },
  {
    number: "02",
    title: "Expert-Led Training",
    description:
      "Learn from experienced professionals who bring practical knowledge into every session.",
  },
  {
    number: "03",
    title: "Business-Focused Outcomes",
    description:
      "Move beyond theory with learning designed to create meaningful professional impact.",
  },
  {
    number: "04",
    title: "Measurable Progress",
    description:
      "Build capabilities that support long-term professional and organizational growth.",
  },
];

export default function AccredianEdge() {
  return (
    <section
      id="edge"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                The Accredian Edge
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Training that goes beyond{" "}
              <span className="text-blue-400">the classroom.</span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-400 lg:justify-self-end">
            A strategic learning approach combining expert guidance,
            practical knowledge, and outcomes that matter to modern
            enterprises.
          </p>
        </div>

        {/* Interactive cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-600 lg:p-10"
            >
              {/* Number + arrow */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-blue-400 transition-colors duration-500 group-hover:text-blue-100">
                  {feature.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xl text-slate-400 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-white group-hover:bg-white group-hover:text-blue-600">
                  →
                </div>
              </div>

              {/* Text */}
              <div className="absolute bottom-10 left-8 right-8 lg:left-10 lg:right-10">
                <h3 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-400 transition-colors duration-500 group-hover:text-blue-50">
                  {feature.description}
                </p>
              </div>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
          <span className="h-px w-12 bg-slate-700" />
          <span>Learn smarter. Build stronger teams.</span>
        </div>
      </div>
    </section>
  );
}