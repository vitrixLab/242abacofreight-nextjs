import { site } from '@/data/site';
import ButtonLink from './ButtonLink';

export default function Hero() {
  const { video } = site.hero;

  return (
    <section id="home" className="hero">
      {/* Background video. Falls back to .hero background-color while loading. */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={video.poster}
        aria-hidden="true"
        tabIndex={-1}
      >
        {video.webm && <source src={video.webm} type="video/webm" />}
        <source src={video.src} type="video/mp4" />
      </video>

      {/* Tint / darken layer so the text stays readable over any frame */}
      <div className="hero-overlay"></div>

      <div className="container hero-inner">
        <div className="eyebrow">{site.hero.eyebrow}</div>

        <h1>
          {site.hero.titleLines[0]}
          <br />
          {site.hero.titleLines[1]}
        </h1>

        <p>{site.hero.text}</p>

        <div className="hero-buttons">
          {site.hero.buttons.map((button) => (
            <ButtonLink
              key={button.label}
              href={button.href}
              variant={button.variant}
            >
              {button.icon ? (
                <>
                  <span className="btn-icon">{button.icon}</span>
                  {' \u00a0 '}
                  {button.label}
                </>
              ) : (
                button.label
              )}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}