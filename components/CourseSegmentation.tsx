const segments = [
  {
    number: "01",
    title: "Program Specific",
    description:
      "Learning paths aligned with specific programs, roles, and professional goals.",
  },
  {
    number: "02",
    title: "Industry Specific",
    description:
      "Relevant capabilities tailored to the challenges and demands of your industry.",
  },
  {
    number: "03",
    title: "Topic Specific",
    description:
      "Focused learning around the exact skills and topics your teams need.",
  },
  {
    number: "04",
    title: "Level Specific",
    description:
      "Content adapted to different experience levels, from foundational to advanced.",
  },
];

export default function CourseSegmentation() {
  return (
    <section
      id="segmentation"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400" />

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
              Tailored Course Segmentation
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The right learning,{" "}
            <span className="text-blue-400">for the right people.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Every organization has different needs. Our programs can be
            structured around your people, industry, objectives, and level of
            expertise.
          </p>
        </div>

        {/* Segmentation */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10">
          {segments.map((segment, index) => (
            <div
              key={segment.number}
              className={`group grid gap-6 p-7 transition-all duration-500 hover:bg-blue-600/10 sm:grid-cols-[80px_1fr_1fr] sm:items-center lg:p-10 ${
                index !== segments.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {/* Number */}
              <span className="font-mono text-sm text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                {segment.number}
              </span>

              {/* Title */}
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {segment.title}
                </h3>

                <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-slate-500 transition-all duration-300 group-hover:translate-x-2 group-hover:border-blue-400 group-hover:text-blue-400 sm:flex">
                  →
                </span>
              </div>

              {/* Description */}
              <p className="max-w-lg leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
          <span className="h-px w-12 bg-slate-700" />
          <span>One framework. Multiple learning paths.</span>
        </div>
      </div>
    </section>
  );
}