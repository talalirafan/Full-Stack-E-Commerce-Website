import heroImage from "../../assets/hero.png";
import "./Hero.css";

const STATS = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const BRANDS = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content container">
        <div className="hero__text">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed to bring
            out your individuality and cater to your sense of style.
          </p>
          <a href="#new-arrivals" className="btn btn-primary">
            Shop Now
          </a>

          <div className="hero__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="Models wearing Shop.co clothing" />
        </div>
      </div>

      <div className="hero__brands" id="brands">
        <div className="container hero__brands-row">
          {BRANDS.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
