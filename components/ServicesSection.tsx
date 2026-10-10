import { site } from "@/data/site";
import ButtonLink from "./ButtonLink";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <SectionHeading title={site.services.title} text={site.services.text} />

        <div className="services-grid">
          {site.services.items.map((service) => (
            <div className="service-card" key={service.imageClass}>
              <div className={`service-image ${service.imageClass}`}>
                <div className="service-title">
                  <div className="service-icon">{service.icon}</div>

                  <span>{service.title}</span>
                </div>
              </div>

              <div className="service-body">
                <p>{service.text}</p>

                <ul className="service-list">
                  {service.points.map((point) => (
                    <li key={point}>
                      <span className="check">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-button">
          <ButtonLink href={site.services.button.href}>
            {site.services.button.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
