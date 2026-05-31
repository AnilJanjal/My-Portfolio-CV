import SectionHeader from "./SectionHeader";

export default function Experience({ items }) {
  return (
    <section className="section shell" id="experience">
      <SectionHeader
        eyebrow="Professional Experience"
        title="Current resume timeline."
        intro="Each role highlights the work most relevant to frontend, mobile, and full stack product delivery."
      />

      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.period}`}>
            <div className="timeline-meta">
              <span>{item.period}</span>
              <small>{item.location}</small>
            </div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="pill-list compact">
                {item.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
