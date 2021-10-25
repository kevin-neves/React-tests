import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestion] = useState(data);

  return <main>
            <div className='container'>
              <h3>Questions and Answers about login</h3>
              <section className='info'>                
                {questions.map((item) => <SingleQuestion key={item.id} {...item} /> )}
              </section>
            </div>
         </main>;
}

export default App;

