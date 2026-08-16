import { useState } from "react";
import "./OrderSummary.css";

const DELIVERY_FEE = 15;
const PROMO_CODES = {
  SAVE20: 0.2,
};

function OrderSummary({ subtotal, onCheckout }) {
  const [promoInput, setPromoInput] = useState("");
  const [discountRate, setDiscountRate] = useState(0.2);
  const [promoMessage, setPromoMessage] = useState(null);

  const discount = subtotal * discountRate;
  const total = Math.max(0, subtotal - discount + DELIVERY_FEE);

  function handleApplyPromo(e) {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();

    if (!code) {
      setPromoMessage({ type: "error", text: "Enter a promo code." });
      return;
    }

    if (PROMO_CODES[code] != null) {
      setDiscountRate(PROMO_CODES[code]);
      setPromoMessage({ type: "success", text: `Promo applied: ${PROMO_CODES[code] * 100}% off.` });
    } else {
      setPromoMessage({ type: "error", text: "Invalid promo code." });
    }
  }

  return (
    <aside className="order-summary">
      <h2>Order Summary</h2>

      <div className="order-summary__row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(0)}</span>
      </div>
      <div className="order-summary__row order-summary__row--discount">
        <span>Discount (-{Math.round(discountRate * 100)}%)</span>
        <span>-${discount.toFixed(0)}</span>
      </div>
      <div className="order-summary__row">
        <span>Delivery Fee</span>
        <span>${DELIVERY_FEE}</span>
      </div>

      <hr />

      <div className="order-summary__row order-summary__row--total">
        <span>Total</span>
        <span>${total.toFixed(0)}</span>
      </div>

      <form className="order-summary__promo" onSubmit={handleApplyPromo}>
        <input
          type="text"
          placeholder="Add promo code"
          value={promoInput}
          onChange={(e) => setPromoInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </form>

      {promoMessage && (
        <p className={`order-summary__promo-message order-summary__promo-message--${promoMessage.type}`}>
          {promoMessage.text}
        </p>
      )}

      <button className="btn btn-primary order-summary__checkout" onClick={onCheckout}>
        Go to Checkout <span>→</span>
      </button>
    </aside>
  );
}

export default OrderSummary;
