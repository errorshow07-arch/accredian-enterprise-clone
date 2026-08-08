const domains = [
  {
    number: "01",
    title: "Product & Innovation Hub",
    description: "Build stronger product thinking and innovation capabilities.",
    tag: "INNOVATION",
  },
  {
    number: "02",
    title: "Gen-AI Mastery",
    description: "Turn generative AI into a practical advantage for your teams.",
    tag: "AI",
  },
  {
    number: "03",
    title: "Leadership Elevation",
    description: "Develop confident leaders ready to make better decisions.",
    tag: "LEADERSHIP",
  },
  {
    number: "04",
    title: "Tech & Data Insights",
    description: "Use technology and data to solve complex business problems.",
    tag: "TECH + DATA",
  },
  {
    number: "05",
    title: "Operations Excellence",
    description: "Improve efficiency, processes, and operational performance.",
    tag: "OPERATIONS",
  },
  {
    number: "06",
    title: "Digital Enterprise",
    description: "Prepare teams for a rapidly evolving digital workplace.",
    tag: "DIGITAL",
  },
  {
    number: "07",
    title: "Fintech Innovation Lab",
    description: "Explore emerging technology across the financial ecosystem.",
    tag: "FINTECH",
  },
];

export default function DomainExpertise() {
  return (
    <section
      id="accreadian"
      className="overflow-hidden bg-slate-50 px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Our Domain Expertise
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Skills for the{" "}
              <span className="text-blue-600">future of work.</span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-500">
            Specialized learning experiences designed around the capabilities
            modern organizations need most.
          </p>
        </div>

        {/* Domain cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <div
              key={domain.number}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Background number */}
              <span className="pointer-events-none absolute -right-3 -top-8 text-[130px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-blue-50">
                {domain.number}
              </span>

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-blue-600">
                  {domain.tag}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-20">
                <h3 className="max-w-md text-2xl font-bold tracking-tight text-slate-950 lg:text-3xl">
                  {domain.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-slate-500">
                  {domain.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
          <span className="h-px w-12 bg-slate-300" />
          <span>Explore capabilities. Build expertise. Create impact.</span>
        </div>
      </div>
    </section>
  );
}