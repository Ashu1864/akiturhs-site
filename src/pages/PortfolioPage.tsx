type Project = {
    name: string;
    sector: string;
    summary: string;
    tech: string;
    status: 'Live' | 'In progress';
  };
  
  const projects: Project[] = [
    {
      name: 'Inventory & Billing Platform',
      sector: 'Retail',
      summary:
        'Web application to manage inventory, billing and GST invoicing for multi‑branch stores.',
      tech: 'React, .NET / Node.js, SQL Server',
      status: 'Live',
    },
    {
      name: 'Field Service Management',
      sector: 'Services',
      summary:
        'Scheduling, ticketing and mobile access for technicians working on‑site with customers.',
      tech: 'React, REST APIs, PostgreSQL, AWS',
      status: 'In progress',
    },
    {
      name: 'Custom ERP Modules',
      sector: 'Manufacturing',
      summary:
        'Production planning and reporting modules integrated into an existing ERP system.',
      tech: 'Angular / React, .NET, SQL',
      status: 'Live',
    },
    {
      name: 'Vendor Management Portal',
      sector: 'Procurement',
      summary:
        'Central portal for onboarding, evaluating and tracking vendors with automated reminders.',
      tech: 'React, Node.js, MongoDB, Azure',
      status: 'Live',
    },
    {
      name: 'HR & Attendance System',
      sector: 'HR / Payroll',
      summary:
        'Browser‑based tool to manage attendance, leaves and basic payroll exports for SMEs.',
      tech: 'React, .NET API, MySQL',
      status: 'Live',
    },
    {
      name: 'School Management Dashboard',
      sector: 'Education',
      summary:
        'Admin dashboard for managing students, fees and communication between staff and parents.',
      tech: 'React, Laravel, MySQL',
      status: 'In progress',
    },
    {
      name: 'E‑commerce Catalog & Orders',
      sector: 'E‑commerce',
      summary:
        'Backend and admin interface for managing products, pricing, discounts and order workflow.',
      tech: 'Next.js, Node.js, PostgreSQL',
      status: 'Live',
    },
    {
      name: 'Reporting & BI Layer',
      sector: 'Analytics',
      summary:
        'Custom reports and dashboards on top of operational databases for management decisions.',
      tech: 'React, .NET, Power BI / Metabase',
      status: 'In progress',
    },
  ];
  
  export default function PortfolioPage() {
    return (
      <div className="min-h-screen bg-[#020B1F] text-white">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Selected work
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl">
              A snapshot of the kind of web platforms and internal tools AKITURHS
              can build. Project names can be anonymised until NDAs allow sharing.
            </p>
          </header>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="bg-[#050F26] border border-slate-800 rounded-xl p-5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base font-semibold text-cyan-300">
                    {project.name}
                  </h2>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${
                      project.status === 'Live'
                        ? 'border-emerald-500 text-emerald-300'
                        : 'border-amber-500 text-amber-300'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2">
                  {project.sector}
                </p>
                <p className="text-xs text-slate-300 mb-3 flex-1">
                  {project.summary}
                </p>
                <p className="text-[11px] text-slate-400">
                  Tech stack: <span className="text-slate-200">{project.tech}</span>
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }
  