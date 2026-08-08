const companies = [
  {
    name: "Bayer",
    logo: "/logos/bayer.svg",
  },
  {
    name: "ADP",
    logo: "/logos/adp.svg",
  },
  {
    name: "CRIF",
    logo: "/logos/crif.png",
  },
  {
    name: "IBM",
    logo: "/logos/ibm.png",
  },
  {
    name: "HCL",
    logo: "/logos/hcl.png",
  },
  {
    name: "Reliance",
    logo: "/logos/reliance.png",
  },
];

export default function Partnerships() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ backgroundColor: "#eef6ff" }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Proven Partnerships
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Trusted by{" "}
            <span className="text-blue-600">
              leading organizations
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Organizations across industries trust Accredian to build
            stronger teams through practical, business-focused learning.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex h-32 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-14 max-w-[150px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 text-sm text-slate-500">
          <span className="h-px flex-1 bg-slate-200" />
          <span>Building capability. Creating impact.</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

      </div>
    </section>
  );
}