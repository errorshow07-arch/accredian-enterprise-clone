const results = [
  "Understand your organization's skill requirements",
  "Build a customized learning strategy",
  "Deliver training that creates measurable results",
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-blue-600 px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Our Solutions
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            How we deliver results that matter.
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            A structured approach that turns learning requirements into
            measurable professional development.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-blue-400/40 md:grid-cols-3">
          {results.map((result, index) => (
            <div
              key={result}
              className="min-h-52 bg-blue-600 p-8"
            >
              <span className="text-sm font-mono text-blue-200">
                0{index + 1}
              </span>

              <p className="mt-12 text-xl font-semibold leading-8">
                {result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}