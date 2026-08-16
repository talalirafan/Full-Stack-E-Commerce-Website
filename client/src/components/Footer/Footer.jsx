import "./Footer.css";

const COLUMNS = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="/" className="navbar__logo">
            SHOP.CO
          </a>
          <p>
            We have clothes that suits your style and which you're proud to wear. From women to
            men.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              ◎
            </a>
            <a href="#" aria-label="Github">
              ⌥
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="footer__col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="footer__payments">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Apple Pay</span>
          <span>G Pay</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
