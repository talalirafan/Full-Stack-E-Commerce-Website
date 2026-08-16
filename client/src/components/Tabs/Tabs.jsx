import { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`tabs__tab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs__panel">{tabs[active].content}</div>
    </div>
  );
}

export default Tabs;
