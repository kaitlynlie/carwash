import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './FAQ.module.scss';

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
    <div className={`${clsx(styles.accorditem)} ${isActive ? 'active' : ''}`}>
      <div className="accordion-question" onClick={toggleAccordion}>
        {question}
      </div>
      {isActive && <div className="accordion-answer">{answer}</div>}
    </div>
  );
};

export default Accordion;