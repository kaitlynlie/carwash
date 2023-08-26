import React, { useState } from 'react';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className="accordion-question" onClick={toggleAccordion}>
        {question}
      </div>
      {isActive && <div className="accordion-answer">{answer}</div>}
    </div>
  );
};

export default Accordion;