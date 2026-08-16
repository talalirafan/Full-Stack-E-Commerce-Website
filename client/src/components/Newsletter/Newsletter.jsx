import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "success", message: "Subscribed! Thanks for joining." });
    setEmail("");
  }

  return (
    <section className="newsletter container">
      <div className="newsletter__panel">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <div className="newsletter__field">
            <span>✉</span>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-outline">
            Subscribe to Newsletter
          </button>
        </form>

        {status && (
          <p className={`newsletter__status newsletter__status--${status.type}`}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
