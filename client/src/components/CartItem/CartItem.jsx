import "./CartItem.css";

function CartItem({ item, onQuantityChange, onRemove }) {
  const { product, size, color, quantity } = item;

  if (!product) return null;

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.style.visibility = "hidden")}
        />
      </div>

      <div className="cart-item__details">
        <div className="cart-item__top">
          <h3>{product.name}</h3>
          <button
            className="cart-item__remove"
            aria-label={`Remove ${product.name} from cart`}
            onClick={() => onRemove(item.id)}
          >
            🗑
          </button>
        </div>

        {size && (
          <p className="cart-item__meta">
            Size: <span>{size}</span>
          </p>
        )}
        {color && (
          <p className="cart-item__meta">
            Color: <span>{color}</span>
          </p>
        )}

        <div className="cart-item__bottom">
          <span className="cart-item__price">${product.price}</span>

          <div className="cart-item__qty">
            <button
              aria-label="Decrease quantity"
              onClick={() => onQuantityChange(item.id, Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              aria-label="Increase quantity"
              onClick={() => onQuantityChange(item.id, quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
