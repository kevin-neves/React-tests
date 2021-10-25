import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
const Question = ({title, info}) => {
  const [isShowing, setIsShowing] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? <FiMinus /> : <FiPlus />}
      </button>
    </header>
    { isShowing && <p>{info}</p> }
  </article>
};

export default Question;
