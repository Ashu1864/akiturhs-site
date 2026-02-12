import logo from '../assets/brand/logo-akiturhs.png';
import { companyConfig } from '../config/company';

export default function HomeHero() {
  return (
    <section className="bg-[#020B1F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <img src={logo} alt={companyConfig.name} className="w-40 mb-6" />
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {companyConfig.tagline.split(' ').slice(0, 2).join(' ')}
            <br />
            {companyConfig.tagline.split(' ').slice(2).join(' ')}
          </h1>
          <p className="mt-4 text-slate-300">
            {companyConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition"
            >
              Book a free consultation
            </a>
            <a
              href="/services"
              className="px-6 py-3 rounded-md border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition"
            >
              View all services
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="rounded-3xl border border-cyan-500/40 bg-[#050F26] p-6 shadow-xl">
            <p className="text-sm text-cyan-300 font-semibold uppercase tracking-wide mb-3">
              What we deliver
            </p>
            <ul className="space-y-2 text-slate-200 text-sm">
              {companyConfig.services.map((service, index) => (
                <li key={index}>• {service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
