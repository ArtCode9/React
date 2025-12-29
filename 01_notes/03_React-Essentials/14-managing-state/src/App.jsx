// React hooks: all these function that start with use in react project 
//              and technically regular functions
import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  // we can not use a regular variable for updating the UI 
  // let tabContent = 'Please click Button!';   //  <<<< so we use react hook and import it 👆 top 

  // 🧲now call hook function and most call it on the top level of the component function 
  // and this useState one of the most important hooks 
  const [ selectedTopic, setSelectedTopic ] = useState('Please Click a button!');

  function handleSelect(selectedButton) {
    // selectButton   => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.warn(selectedTopic);
  }

  console.warn(`App component Executed`);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

/* 
  By default React component Execute Only Once
  you have to tell react if a component should be executed again

  How react Check if UI update are needed:
  ⭕ React compares the old output (old JSX Code) of your
  components function to the new output (new JSC code) and
  applies any differences to the actual website UI
 */

