import SectionHeader from "./SectionHeader";

export default function Skills({ groups }) {
  return (
    <section className="section shell" id="skills">
      <SectionHeader
        eyebrow="Technical Skills"
        title="A balanced stack for modern product teams."
        intro="Organized directly from the current resume so recruiters can scan by discipline."
      />
      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>
            <div className="pill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
