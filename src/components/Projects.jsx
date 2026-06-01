import SectionHeader from "./SectionHeader";

export default function Projects({ items }) {
  return (
    <section className="section shell" id="projects">
      <SectionHeader
        eyebrow="Key Projects"
        title="Selected work across product categories."
        intro="Selected project work grouped by product category and technical scope."
      />

      <div className="project-grid">
        {items.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="pill-list compact">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
