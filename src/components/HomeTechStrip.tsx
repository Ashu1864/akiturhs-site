const tech = [
  // Frontend Frameworks
  'React', 'Next.js', 'Vue.js', 'Angular', 'Svelte',
  // Languages
  'TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'Go',
  // Backend
  'Node.js', '.NET', 'Spring Boot', 'Django', 'Express',
  // Databases
  'SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  // Cloud & DevOps
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
  // UI/CSS Frameworks
  'Tailwind CSS', 'Bootstrap', 'Material-UI', 'SASS', 'Shadcn UI',
  // Design Tools
  'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Lightroom', 'Canva',
  // Mobile
  'React Native', 'Flutter',
  // Testing & Tools
  'Jest', 'Cypress', 'Git', 'Jenkins'
];

export default function HomeTechStrip() {
  return (
    <section className="bg-[#050F26] border-t border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">
          Technologies we work with
        </p>
        <div className="flex flex-wrap gap-3">
          {tech.map((name) => (
            <span
              key={name}
              className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-200 bg-[#020B1F]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
