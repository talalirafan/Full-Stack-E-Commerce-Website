import "./ReviewCard.css";

function ReviewCard({ review }) {
  const full = Math.round(review.rating);

  return (
    <div className="review-card">
      <div className="review-card__stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < full ? "star star--filled" : "star"}>
            ★
          </span>
        ))}
      </div>

      <div className="review-card__name">
        {review.name} {review.verified && <span className="verified">✔</span>}
      </div>

      <p className="review-card__text">"{review.text}"</p>

      <p className="review-card__date">
        Posted on{" "}
        {new Date(review.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

export default ReviewCard;
