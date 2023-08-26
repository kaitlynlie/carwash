import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './FAQ.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
        {question} <FontAwesomeIcon icon={faAngleDown} style={{ paddingLeft: '10px' }}/>
      </div>
      {isActive && <div className={clsx(styles.accorda)}>{answer}</div>}
    </div>
  );
};

export default Accordion;