import "./FilterSidebar.css";

const TYPES = ["t-shirts", "shorts", "shirts", "hoodie", "jeans"];
const TYPE_LABELS = {
  "t-shirts": "T-shirts",
  shorts: "Shorts",
  shirts: "Shirts",
  hoodie: "Hoodie",
  jeans: "Jeans",
};

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#facc15",
  "#f97316",
  "#38bdf8",
  "#2563eb",
  "#7c3aed",
  "#ec4899",
  "#ffffff",
  "#000000",
];

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const DRESS_STYLES = ["casual", "formal", "party", "gym"];

function FilterSidebar({ filters, onChange, onApply }) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar__header">
        <h3>Filters</h3>
      </div>

      <div className="filter-sidebar__group">
        <ul className="filter-sidebar__type-list">
          {TYPES.map((type) => (
            <li key={type}>
              <button
                className={filters.type === type ? "active" : ""}
                onClick={() => onChange("type", filters.type === type ? "" : type)}
              >
                {TYPE_LABELS[type]} <span>›</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-sidebar__group">
        <h4>Price</h4>
        <div className="filter-sidebar__price">
          <input
            type="range"
            min="0"
            max="300"
            value={filters.maxPrice}
            onChange={(e) => onChange("maxPrice", Number(e.target.value))}
          />
          <div className="filter-sidebar__price-labels">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="filter-sidebar__group">
        <h4>Colors</h4>
        <div className="filter-sidebar__colors">
          {COLORS.map((color) => (
            <button
              key={color}
              className={`swatch ${filters.color === color ? "swatch--active" : ""}`}
              style={{ background: color, borderColor: color === "#ffffff" ? "#ddd" : color }}
              aria-label={`Color ${color}`}
              onClick={() => onChange("color", filters.color === color ? "" : color)}
            >
              {filters.color === color && <span className="swatch__check">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-sidebar__group">
        <h4>Size</h4>
        <div className="filter-sidebar__sizes">
          {SIZES.map((size) => (
            <button
              key={size}
              className={filters.size === size ? "active" : ""}
              onClick={() => onChange("size", filters.size === size ? "" : size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-sidebar__group">
        <h4>Dress Style</h4>
        <ul className="filter-sidebar__type-list">
          {DRESS_STYLES.map((style) => (
            <li key={style}>
              <button
                className={filters.category === style ? "active" : ""}
                onClick={() => onChange("category", filters.category === style ? "" : style)}
              >
                {style[0].toUpperCase() + style.slice(1)} <span>›</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary filter-sidebar__apply" onClick={onApply}>
        Apply Filter
      </button>
    </aside>
  );
}

export default FilterSidebar;
