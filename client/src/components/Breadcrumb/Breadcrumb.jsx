import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb container" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumb__item">
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
          {index < items.length - 1 && <span className="breadcrumb__sep">›</span>}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
