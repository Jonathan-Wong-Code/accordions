import React, { useState, useRef, useEffect } from "react";
import { AccordionBody, AccordionButton, AccordionContent } from "./css";

const Accordion = ({
  children,
  title,
  index,
  setActiveAccordion,
  activeAccordion
}) => {
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(false);

  // Reset active to false if not currently selected
  useEffect(() => {
    setActive(index === activeAccordion);
  }, [index, activeAccordion]);

  // If active set to current scroll height.
  useEffect(() => {
    setHeight(active ? content.current.scrollHeight : 0);
  }, [active]);

  const toggleAccordion = () => {
    setActive(prevState => !prevState);
    setActiveAccordion(index);
  };

  const content = useRef(null);
  return (
    <AccordionBody>
      <AccordionButton onClick={toggleAccordion}>
        <h3 style={{ margin: 0 }}>{title}</h3>
      </AccordionButton>
      <AccordionContent
        ref={content}
        style={{ height: activeAccordion === index ? `${height}px` : 0 }}
      >
        {children}
      </AccordionContent>
    </AccordionBody>
  );
};

export default Accordion;
