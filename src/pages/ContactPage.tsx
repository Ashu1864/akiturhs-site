import { companyConfig } from '../config/company';

export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[#020B1F] text-white">
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Contact {companyConfig.shortName}
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl">
              Reach out to discuss projects, partnerships or support. The team will respond
              within 1–2 business days.
            </p>
          </header>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Main contact card */}
            <div className="bg-[#050F26] border border-slate-800 rounded-xl p-5 space-y-3">
              <h2 className="text-lg font-semibold text-cyan-300 mb-1">
                Contact details
              </h2>
  
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase">
                  Location
                </p>
                <p className="text-sm text-slate-200">
                  {companyConfig.contact.address || 'Baijnath, Himachal Pradesh, India'}
                </p>
              </div>
  
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                  {companyConfig.contact.email}
                </a>
              </div>
  
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:${companyConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                  {companyConfig.contact.phone}
                </a>
              </div>
            </div>
  
            {/* Info card */}
            <div className="bg-[#050F26] border border-slate-800 rounded-xl p-5 space-y-3">
              <h2 className="text-lg font-semibold text-cyan-300 mb-1">
                Business hours
              </h2>
              <p className="text-sm text-slate-300">
                Monday – Friday  
                <br />
                10:00 AM – 7:00 PM IST
              </p>
              <p className="text-xs text-slate-400 mt-2">
                For urgent matters, please use phone/WhatsApp. For detailed project
                discussions, email is preferred so the technical team can review
                requirements before the call.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  