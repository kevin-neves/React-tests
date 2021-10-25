import React, { useState } from 'react';
import Slides from './Slides'
import SliderButtonRight from './SliderButtonRight';
import SliderButtonLeft from './SliderButtonLeft';
import data from './data';
import { useSliderIndex, useAutoSlider } from './utils'


function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useSliderIndex(index, setIndex, people);
  useAutoSlider(index, setIndex);

  return (
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
        <div className="section-center">
        <Slides people={people} index={index} />
        <SliderButtonLeft index={index} setIndex={setIndex} />
        <SliderButtonRight index={index} setIndex={setIndex} />
      </div>
    </section>
    );
};

export default App;
