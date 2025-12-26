type Role = {
    title: string;
    type: string;
    location: string;
    summary: string;
    status: 'Open' | 'Upcoming';
  };
  
  const roles: Role[] = [
    {
      title: 'Junior React Developer',
      type: 'Full‑time',
      location: 'Baijnath, Himachal Pradesh (Remote)',
      summary:
        'Work with senior engineers to build front‑end features for client web applications.',
      status: 'Upcoming',
    },
    {
      title: '.NET / Backend Developer',
      type: 'Full‑time',
      location: 'Baijnath, Himachal Pradesh (Remote)',
      summary:
        'Build and maintain REST APIs, database schemas and integrations for enterprise clients.',
      status: 'Upcoming',
    },
    {
      title: 'QA Engineer (Manual & Automation)',
      type: 'Full‑time',
      location: 'Baijnath, Himachal Pradesh (Remote)',
      summary:
        'Create test plans, execute test cases and help maintain product quality across releases.',
      status: 'Upcoming',
    },
  ];
  
  export default function CareerPage() {
    return (
      <div className="min-h-screen bg-[#020B1F] text-white">
        <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Careers at AKITURHS
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl">
              Join AKITURHS remotely from Baijnath, Himachal Pradesh and work on
              modern web and cloud solutions for businesses in India and abroad.
            </p>
          </header>
  
          <section className="bg-[#050F26] border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-cyan-300 mb-2">
              Why work with us
            </h2>
            <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Remote‑first culture with clear communication.</li>
              <li>Exposure to modern stacks (React, .NET/Node, cloud).</li>
              <li>Support for learning, certifications and career growth.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold mb-3">Upcoming opportunities</h2>
            <div className="space-y-4">
              {roles.map((role) => (
                <article
                  key={role.title}
                  className="bg-[#050F26] border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-base font-semibold text-cyan-300">
                      {role.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {role.type} · {role.location}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 max-w-xl">
                      {role.summary}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-amber-500 text-amber-300">
                      Upcoming
                    </span>
                    <span className="text-[11px] text-slate-400">
                      You can still email your CV to{' '}
                      <a
                        href="mailto:akiturhstechsolutions@gmail.com?subject=Future%20opportunity%20-%20AKITURHS"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        akiturhstechsolutions@gmail.com
                      </a>
                      .
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    );
  }
  