export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:px-12 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.28),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Enterprise Learning Solutions
          </div>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Next-Gen Expertise for{" "}
            <span className="text-blue-400">Your Enterprise</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Cultivate high-performance teams through expert learning,
            tailored solutions, and industry-focused training.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Tailored Solutions",
              "Industry Insights",
              "Expert Guidance",
              "Measurable Impact",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-slate-200"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          <a
            href="#enquire"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Enquire Now
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-600/20 blur-3xl" />

          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 text-4xl font-bold shadow-xl">
                A
              </div>

              <p className="mt-6 text-xl font-semibold">
                Enterprise Excellence
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Learn. Transform. Grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}