"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Brand from "./Brand";
import ButtonLink from "./ButtonLink";

export default function SiteHeader() {
  const [current, setCurrent] = useState("#home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    const updateActiveNav = () => {
      let active = "";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          active = section.id;
        }
      });

      setCurrent("#" + active);
    };

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav);

    return () => window.removeEventListener("scroll", updateActiveNav);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />

        <nav className="main-nav">
          {site.nav.map((item) => (
            <a
              key={item.href}
              className={current === item.href ? "active" : undefined}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="phone-link" href={site.phone.href}>
            <span className="phone-icon">{site.phone.icon}</span>
            <span>{site.phone.label}</span>
          </a>

          <ButtonLink href={site.headerCta.href} small>
            {site.headerCta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
