import React, { useState, useRef, useEffect } from "react";
import { AccordionBody, AccordionButton, AccordionContent } from "./css";

const Accordion = ({ children, title }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(active ? content.current.scrollHeight : 0);
  }, [active]);

  const toggleAccordion = () => {
    setActive(prevState => !prevState);
  };

  const content = useRef(null);
  return (
    <AccordionBody>
      <AccordionButton onClick={toggleAccordion}>
        <h3 style={{ margin: 0 }}>{title}</h3>
      </AccordionButton>
      <AccordionContent ref={content} style={{ height: `${height}px` }}>
        {children}
      </AccordionContent>
    </AccordionBody>
  );
};

export default Accordion;
