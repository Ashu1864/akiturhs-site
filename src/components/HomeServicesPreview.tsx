const items = [
    { title: 'Custom web applications', desc: 'Business‑critical apps tailored to your workflows.' },
    { title: 'Cloud & DevOps', desc: 'Reliable, scalable infrastructure with CI/CD pipelines.' },
    { title: 'Product engineering', desc: 'From MVP to enterprise‑grade digital products.' },
  ];
  
  export default function HomeServicesPreview() {
    return (
      <section className="bg-[#050F26] border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <header className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">What AKITURHS does</h2>
              <p className="text-slate-300 text-sm">
                End‑to‑end development for web platforms, APIs and cloud solutions.
              </p>
            </div>
            <a
              href="/services"
              className="hidden md:inline-flex text-sm text-cyan-400 hover:text-cyan-300"
            >
              See all services →
            </a>
          </header>
  
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-[#020B1F] p-5 hover:border-cyan-500/70 hover:-translate-y-1 transition"
              >
                <h3 className="text-base font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  