const services = [
    {
      title: 'Custom Web Applications',
      short:
        'Design and development of secure, scalable web platforms tailored to your business workflows.',
    },
    {
      title: 'Cloud & DevOps Services',
      short:
        'Architecture on AWS/Azure, CI/CD pipelines, monitoring and optimisation for reliable deployments.',
    },
    {
      title: 'Product Engineering & Modernization',
      short:
        'End‑to‑end product development from MVP to enterprise systems, including legacy app modernisation.',
    },
    {
      title: 'API & Backend Development',
      short:
        'Robust REST/GraphQL APIs, third‑party integrations and microservices designed for performance and security.',
    },
    {
      title: 'IT Infrastructure & Network Management',
      short:
        'Setup and management of servers, networks, backups and monitoring to keep systems healthy and online.',
    },
    {
      title: 'Managed IT Support & Help Desk',
      short:
        'Remote support for users, troubleshooting, patching and ongoing maintenance for day‑to‑day IT needs.',
    },
    {
      title: 'Vendor & License Management',
      short:
        'Assistance with selecting, negotiating and managing IT vendors, SaaS tools and software licenses.',
    },
    {
      title: 'Cybersecurity & Compliance',
      short:
        'Basic security hardening, access control reviews and guidance towards compliant, secure environments.',
    },
    {
      title: 'Data, Reporting & BI',
      short:
        'Dashboards and reporting solutions that turn operational data into usable insights for decision‑making.',
    },
    {
      title: 'UI/UX Design',
      short:
        'Modern user interfaces, design systems and prototypes aligned with your brand and user journeys.',
    },
    {
      title: 'Support, Maintenance & SLA',
      short:
        'Planned maintenance, improvements and SLAs so critical business systems stay stable over time.',
    },
  ];
  
  export default function ServicesPage() {
    return (
      <div className="min-h-screen bg-[#020B1F] text-white">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Services we provide
          </h1>
          <p className="text-slate-300 mb-8 max-w-2xl">
            AKITURHS Tech Solutions LLP partners with businesses to plan, build
            and maintain reliable web and cloud software that fits real‑world
            operations.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-800 bg-[#050F26] p-5 hover:border-cyan-500/70 hover:-translate-y-1 transition"
              >
                <h2 className="text-lg font-semibold mb-2 text-cyan-300">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-300">{service.short}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  