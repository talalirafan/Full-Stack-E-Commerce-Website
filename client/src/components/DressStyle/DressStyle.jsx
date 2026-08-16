import { Link } from "react-router-dom";
import "./DressStyle.css";

function DressStyle({ styles }) {
  return (
    <section className="dress-style section">
      <div className="container dress-style__panel">
        <h2 className="section-title">Browse by Dress Style</h2>

        <div className="dress-style__grid">
          {styles.map((style) => (
            <Link
              key={style.id}
              to={`/category/${style.category}`}
              className="dress-style__card"
              aria-label={style.name}
            >
              <img
                src={style.image}
                alt={style.name}
                onError={(e) => (e.target.style.visibility = "hidden")}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DressStyle;
