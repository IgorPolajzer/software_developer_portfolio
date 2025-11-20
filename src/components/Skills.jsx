function Skills({ title, subtitle, skills }) {
  return (
    <div className="flex flex-col items-center w-full p-20">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-2">{title}</h1>
        <h2 className="font-semibold text-[var(--color-subtitle)]">{subtitle}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
        {skills.map((skill, idx) => (
          <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-[var(--color-bg-primary-opacity)] rounded-lg shadow hover:scale-105 transform transition border-2 border-[var(--color-text-base)]"
          >
            <img src={skill.iconPath} alt={skill.label} className="w-12 h-12 mb-2" />
            <p className="text-[var(--color-text-base)] font-semibold text-center text-sm">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
