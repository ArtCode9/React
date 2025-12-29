// React hooks: all these function that start with use in react project 
//              and technically regular functions
import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  // we can not use a regular variable for updating the UI 
  // let tabContent = 'Please click Button!';   //  <<<< so we use react hook and import it 👆 top 

  // 🧲now call hook function and most call it on the top level of the component function 
  // and this useState one of the most important hooks 
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectButton   => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.warn(selectedTopic);
  }

  console.warn(`App component Executed`);



  let tabContent = <p>Please select a topic.</p>;
  // 🎄
  if(selectedTopic){
    tabContent = (
        <div id="tab-content"> 
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                      <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
              </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            
            <TabButton 
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
              >Components</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
              >JSX</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
              >Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
              >State</TabButton>

          </menu>
            {/* first way : */}
            {/* { !selectedTopic ? <p>Please Select a topic</p> : 
                  <div id="tab-content"> 
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                      <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                  </div>
           }     */}
           {/* Second way we can do this :: */}

           {/* {!selectedTopic && <p>Please Select a topic.</p>}
           {selectedTopic && (
              <div id="tab-content"> 
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                      <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
              </div>
           )} */}

           {/* Third way we use if statement i create above 🎄 */}
           {tabContent}          
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

