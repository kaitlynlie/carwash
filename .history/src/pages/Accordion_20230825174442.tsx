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
      <div className={clsx(styles.accordq)} onClick={toggleAccordion}>
        {question}
      </div>
      <i className='fa-solid fa-angle-down' />
      {isActive && <div className={clsx(styles.accorda)}>{answer}</div>}
    </div>
  );
};

export default Accordion;