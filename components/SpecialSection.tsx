import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function SpecialSection() {
  return (
    <section className="special">
      <div className="container">
        <SectionHeading title={site.special.title} text={site.special.text} />

        <div className="special-grid">
          {site.special.cards.map((card) => (
            <div className="special-card" key={card.title}>
              <div className="special-icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
