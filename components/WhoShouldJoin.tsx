const audiences = [
  {
    number: "01",
    title: "Tech Professionals",
    description:
      "Enhance technical expertise, embrace emerging technologies, and drive innovation.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Non-Tech Professionals",
    description:
      "Build digital confidence and collaborate effectively in technology-driven environments.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Emerging Professionals",
    description:
      "Develop powerful skills and accelerate your journey toward career growth.",
    icon: "✦",
  },
  {
    number: "04",
    title: "Senior Professionals",
    description:
      "Strengthen leadership capabilities and make sharper strategic decisions.",
    icon: "◈",
  },
];

export default function WhoShouldJoin() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                Who Should Join?
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learning designed for{" "}
              <span className="text-blue-600">every stage</span> of your
              professional journey.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-500 lg:justify-self-end">
            Whether you're building your career, adapting to change, or
            leading teams, there's a learning path for you.
          </p>
        </div>

        {/* Audience cards */}
        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.number}
              className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-blue-600 transition-colors duration-500 group-hover:text-blue-100">
                  {audience.number}
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-600 transition-all duration-500 group-hover:rotate-12 group-hover:border-white group-hover:text-blue-600">
                  {audience.icon}
                </span>
              </div>

              {/* Giant background number */}
              <span className="pointer-events-none absolute -bottom-8 -right-3 text-[150px] font-black leading-none text-slate-200/60 transition-colors duration-500 group-hover:text-blue-500">
                {audience.number}
              </span>

              {/* Content */}
              <div className="absolute bottom-8 left-7 right-7">
                <h3 className="text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-500 group-hover:text-white">
                  {audience.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500 transition-colors duration-500 group-hover:text-blue-50">
                  {audience.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-500 group-hover:gap-4 group-hover:text-white">
                  Explore learning
                  <span>→</span>
                </div>
              </div>

              {/* Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}