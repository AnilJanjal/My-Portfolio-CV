export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
