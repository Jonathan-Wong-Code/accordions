import React, { useState } from "react";
import "./styles.css";
import Accordion from "./components/SingleAccordionOpen";
export default function App() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const titles = ["Title 1", "Title 2", "Title 3"];

  return (
    <div className="App">
      {titles.map((title, i) => {
        return (
          <Accordion
            title={title}
            index={i}
            setActiveAccordion={setActiveAccordion}
            activeAccordion={activeAccordion}
            key={title}
          >
            Some Content
          </Accordion>
        );
      })}
    </div>
  );
}
