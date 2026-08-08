const stats = [
  {
    value: "10K+",
    label: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    label: "Sessions delivered with unmatched learning excellence",
  },
  {
    value: "5K+",
    label: "Active learners engaged in dynamic courses",
  },
];

export default function TrackRecord() {
  return (
    <section id="stats" className="bg-slate-950 px-6 py-20 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Our Track Record
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            The Numbers Behind Our Success
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <div className="text-5xl font-bold text-blue-400 sm:text-6xl">
                {stat.value}
              </div>

              <p className="mx-auto mt-4 max-w-xs leading-7 text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}