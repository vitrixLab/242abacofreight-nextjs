import { Fragment } from "react";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeading title={site.contact.title} text={site.contact.text} />

        <div className="contact-grid">
          <div className="contact-box">
            <h2>{site.contact.boxTitle}</h2>

            <p>{site.contact.boxText}</p>

            <div className="contact-info">
              {site.contact.info.map((row) => (
                <div className="info-row" key={row.title}>
                  <div className="info-icon">{row.icon}</div>

                  <div>
                    <div className="info-title">{row.title}</div>

                    <div
                      className={
                        row.tone ? `info-text ${row.tone}` : "info-text"
                      }
                    >
                      {row.lines.map((line, lineIndex) => (
                        <Fragment key={lineIndex}>
                          {lineIndex > 0 ? <br /> : null}
                          {line}
                        </Fragment>
                      ))}

                      {row.redPhone ? (
                        <>
                          <br />
                          <span className="red">{row.redPhone}</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-box">
            <h2>{site.contact.boxTitle}</h2>

            <p>{site.contact.boxText}</p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
