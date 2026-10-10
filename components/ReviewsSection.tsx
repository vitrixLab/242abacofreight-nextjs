import { site } from "@/data/site";
import ButtonLink from "./ButtonLink";
import SectionHeading from "./SectionHeading";

export default function ReviewsSection() {
  return (
    <section className="reviews">
      <div className="container">
        <SectionHeading title={site.reviews.title} text={site.reviews.text} />

        <div className="review-grid">
          {site.reviews.items.map((review) => (
            <div className="review-card" key={review.text}>
              <span className="verified">{site.reviews.verified}</span>

              <div className="stars">{site.reviews.stars}</div>

              <p className="review-text">{review.text}</p>

              {review.reviewer ? (
                <div className="reviewer">
                  <div className="reviewer-icon">{review.reviewer.icon}</div>

                  <div>
                    <div className="reviewer-name">{review.reviewer.name}</div>

                    <div className="reviewer-date">{review.reviewer.date}</div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="share-review">
          <ButtonLink href={site.reviews.button.href} variant="light">
            {site.reviews.button.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
