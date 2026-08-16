import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.css";

function ProductSection({ id, title, products, loading, error }) {
  return (
    <section id={id} className="product-section section">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        {loading && <p className="product-section__status">Loading...</p>}
        {error && <p className="product-section__status">Couldn't load products.</p>}

        {!loading && !error && (
          <div className="product-section__grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="product-section__footer">
          <button className="btn btn-outline">View All</button>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
