import { ArrowUpRightIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function FeaturedWebsite({ website }) {
  return (
    <section className="section featured-work-section shell" id="live-work">
      <SectionHeader
        eyebrow="Live Product"
        title="See a real production platform I built."
        intro="This section gives recruiters and clients a direct way to inspect live work from inside the portfolio."
      />

      <article className="featured-work-card">
        <div className="website-preview-shell" aria-label={`${website.name} live website preview`}>
          <div className="browser-bar">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-address">{website.url}</span>
          </div>
          <iframe
            title={`${website.name} live preview`}
            src={website.url}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="featured-work-copy">
          <p className="project-category">{website.category}</p>
          <h3>{website.name}</h3>
          <p className="featured-summary">{website.summary}</p>
          <p className="featured-highlight">{website.highlights[0]}</p>
          <div className="pill-list compact">
            {website.tools.slice(0, 5).map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
            <span>{website.tools.length - 5}+ more</span>
          </div>
          <a className="btn btn-primary" href={website.url} target="_blank" rel="noreferrer">
            Open AkshaTools <ArrowUpRightIcon />
          </a>
        </div>
      </article>
    </section>
  );
}
