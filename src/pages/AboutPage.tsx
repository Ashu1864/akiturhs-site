export default function AboutPage() {
    return (
      <div className="min-h-screen bg-[#020B1F] text-white">
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
          <header>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              About AKITURHS Tech Solutions LLP
            </h1>
            <p className="text-slate-300 max-w-2xl text-sm">
              AKITURHS is an IT services and software development partner based in Ludhiana, Punjab,
              helping startups and businesses build reliable web platforms, APIs and cloud solutions.
            </p>
          </header>
  
          {/* Mission & vision */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#050F26] border border-slate-800 rounded-xl p-5">
              <h2 className="text-lg font-semibold text-cyan-300 mb-2">
                Our mission
              </h2>
              <p className="text-sm text-slate-300">
                To deliver robust, maintainable software that solves real business problems,
                using modern technologies and transparent communication.
              </p>
            </div>
            <div className="bg-[#050F26] border border-slate-800 rounded-xl p-5">
              <h2 className="text-lg font-semibold text-cyan-300 mb-2">
                Our vision
              </h2>
              <p className="text-sm text-slate-300">
                To be the technology partner businesses rely on for long‑term digital growth,
                from first MVP to large‑scale enterprise systems.
              </p>
            </div>
          </section>
  
          {/* How we work */}
          <section className="bg-[#050F26] border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-cyan-300 mb-3">
              How we work
            </h2>
            <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Start with a discovery call to understand goals and constraints.</li>
              <li>Break work into clear milestones with timelines and estimates.</li>
              <li>Use agile delivery with weekly updates and demo sessions.</li>
              <li>Provide post‑launch monitoring, support and enhancements.</li>
            </ul>
          </section>
  
          {/* Values */}
          <section className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Reliability', text: 'We ship on agreed timelines and keep communication active.' },
              { title: 'Quality', text: 'Clean code, reviews and testing are part of every project.' },
              { title: 'Transparency', text: 'Clear scope, honest estimates and no hidden surprises.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#050F26] border border-slate-800 rounded-xl p-5"
              >
                <h3 className="text-sm font-semibold text-cyan-300 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300">{item.text}</p>
              </div>
            ))}
          </section>
        </section>
      </div>
    );
  }
  