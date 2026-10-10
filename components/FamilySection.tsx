import { site } from "@/data/site";
import ButtonLink from "./ButtonLink";
import SectionHeading from "./SectionHeading";

export default function FamilySection() {
  return (
    <section className="family">
      <div className="container">
        <SectionHeading title={site.family.title} text={site.family.text} />

        <div className="family-grid">
          <div className="family-copy">
            <h2>{site.family.copyTitle}</h2>

            {site.family.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="family-buttons">
              {site.family.buttons.map((button) => (
                <ButtonLink
                  key={button.label}
                  href={button.href}
                  variant={button.variant}
                >
                  {button.icon ? (
                    <>
                      {button.icon}
                      {" \u00a0 "}
                      {button.label}
                    </>
                  ) : (
                    button.label
                  )}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="family-card">
            <div className="family-image">
              <div className="family-image-overlay">
                <h3>{site.family.card.title}</h3>

                <p>{site.family.card.text}</p>
              </div>
            </div>

            <div className="stats">
              {site.family.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
