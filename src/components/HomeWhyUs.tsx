export default function HomeWhyUs() {
    const points = [
      {
        title: 'End‑to‑end ownership',
        desc: 'From idea and architecture to deployment and support, we stay with you for the full lifecycle.',
      },
      {
        title: 'Modern tech stack',
        desc: 'React, .NET / Node.js, cloud platforms and CI/CD pipelines for fast, reliable delivery.',
      },
      {
        title: 'Transparent communication',
        desc: 'Regular updates, clear estimates and a single point of contact for your project.',
      },
    ];
  
    return (
      <section className="bg-[#020B1F]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-2">Why work with AKITURHS?</h2>
          <p className="text-slate-300 text-sm mb-6 max-w-2xl">
            A remote‑first team from Baijnath, Himachal Pradesh, focused on stable delivery and
            long‑term relationships, not one‑off projects.
          </p>
  
          <div className="grid gap-6 md:grid-cols-3">
            {points.map((item) => (
              <div
                key={item.title}
                className="bg-[#050F26] border border-slate-800 rounded-xl p-5"
              >
                <h3 className="text-sm font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  