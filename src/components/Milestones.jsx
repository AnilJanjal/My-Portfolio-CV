import { CheckCircleIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Milestones({ items }) {
  return (
    <section className="section shell" aria-labelledby="milestones-title">
      <SectionHeader
        eyebrow="Career Milestones"
        title="Production-focused delivery across web and mobile."
        intro="A concise snapshot of the outcomes and platforms highlighted in the current resume."
      />
      <div className="milestone-grid">
        {items.map((item) => (
          <article className="milestone-card" key={item}>
            <CheckCircleIcon />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
