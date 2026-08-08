const steps = [
  {
    number: "01",
    letter: "C",
    title: "Skill Gap Analysis",
    description:
      "Identify the skills and capabilities your teams need to develop.",
  },
  {
    number: "02",
    letter: "A",
    title: "Customized Training Plan",
    description:
      "Create a focused learning journey based on your organization's goals.",
  },
  {
    number: "03",
    letter: "T",
    title: "Flexible Program Delivery",
    description:
      "Deliver engaging learning experiences designed around your teams.",
  },
];

export default function CATFramework() {
  return (
    <section
      id="cat"
      className="relative overflow-hidden bg-blue-600 px-6 py-24 text-white lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-900/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">
                The CAT Framework
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Our proven approach to{" "}
              <span className="text-blue-100">
                learning excellence.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-blue-100 lg:justify-self-end">
            A structured three-step approach to understanding needs,
            building the right plan, and delivering impactful learning.
          </p>
        </div>

        {/* CAT cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative min-h-[390px] overflow-hidden rounded-3xl bg-white p-8 text-slate-950 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:p-10"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-blue-600">
                  {step.number}
                </span>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold tracking-widest text-blue-600">
                  STEP
                </span>
              </div>

              {/* Big letter */}
              <div className="mt-8">
                <span className="block text-[120px] font-black leading-none tracking-[-0.1em] text-blue-50 transition-all duration-500 group-hover:text-blue-100">
                  {step.letter}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-9 left-8 right-8 lg:left-10 lg:right-10">
                <h3 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-9 right-8 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg text-white transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-[-45deg] lg:right-10">
                →
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm font-medium text-blue-100">
          <span className="h-px w-12 bg-blue-300/50" />
          <span>Assess • Adapt • Transform</span>
          <span className="h-px w-12 bg-blue-300/50" />
        </div>
      </div>
    </section>
  );
}