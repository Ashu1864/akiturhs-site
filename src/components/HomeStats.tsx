const stats = [
    { label: 'Years of experience', value: '5+' },
    { label: 'Projects delivered', value: '20+' },
    { label: 'Tech stacks handled', value: '10+' },
  ];
  
  export default function HomeStats() {
    return (
      <section className="bg-[#020B1F]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-[#050F26] border border-slate-800 rounded-xl p-5 text-center"
            >
              <p className="text-2xl font-extrabold text-cyan-300">{item.value}</p>
              <p className="text-xs text-slate-300 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  