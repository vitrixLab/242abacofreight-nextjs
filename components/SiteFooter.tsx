import { Fragment } from "react";
import { site } from "@/data/site";

export default function SiteFooter() {
  const { company, hours, locations, payment } = site.footer;

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>
              {company.titleLines[0]}
              <br />
              {company.titleLines[1]}
            </h3>

            <div className="footer-contact">
              {company.contact.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>

            <p className="footer-description">{company.description}</p>

            <div className="socials">
              {company.socials.map((social) => (
                <a
                  key={social.className}
                  className={`social ${social.className}`}
                  href={social.href}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3 className="icon-title">
              {hours.icon}
              {` ${hours.title}`}
            </h3>

            {hours.blocks.map((block, blockIndex) => (
              <Fragment key={blockIndex}>
                {blockIndex > 0 ? <br /> : null}

                <p>
                  {block.map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                      {lineIndex > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </p>
              </Fragment>
            ))}

            <p style={{ color: "#ef2857", marginTop: "4px" }}>{hours.phone}</p>
          </div>

          <div className="footer-column">
            <h3>{locations.title}</h3>

            <ul className="footer-list">
              {locations.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="icon-title">
              {payment.icon}
              {` ${payment.title}`}
            </h3>

            <div className="payment-grid">
              {payment.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">{site.footer.bottom}</div>
      </div>
    </footer>
  );
}
