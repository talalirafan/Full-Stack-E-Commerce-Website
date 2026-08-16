import "./Testimonials.css";

function Testimonials({ testimonials }) {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="section-title testimonials__title">Our Happy Customers</h2>
        </div>

        <div className="testimonials__row">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="star star--filled">
                    ★
                  </span>
                ))}
              </div>
              <div className="testimonial-card__name">
                {t.name} {t.verified && <span className="verified">✔</span>}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
