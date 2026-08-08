export default function Footer() {
  return (
    <footer
      id="about"
      className="bg-gray-950 px-6 py-12 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Accredian</h2>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Empowering organizations with expert-led learning and
              strategic training solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">Explore</h3>

            <div className="mt-4 flex flex-col gap-3 text-gray-400">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>

              <a href="#stats" className="transition hover:text-white">
                Stats
              </a>

              <a href="#clients" className="transition hover:text-white">
                Clients
              </a>

              <a href="#edge" className="transition hover:text-white">
                Accredian Edge
              </a>

              <a href="#cat" className="transition hover:text-white">
                CAT
              </a>
            </div>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 flex flex-col gap-3 text-gray-400">
              <a href="#how-it-works" className="transition hover:text-white">
                How It Works
              </a>

              <a href="#faqs" className="transition hover:text-white">
                FAQs
              </a>

              <a href="#testimonials" className="transition hover:text-white">
                Testimonials
              </a>

              <a href="#enquire" className="transition hover:text-white">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 space-y-3 text-gray-400">
              <p>enterprise@accredian.com</p>

              <p>
                4th Floor, 250, Phase IV,
                <br />
                Udyog Vihar, Sector 18,
                <br />
                Gurugram, Haryana
              </p>
            </div>

            <a
              href="#enquire"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}