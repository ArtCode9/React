import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
  return (
    // 🧲You can import Fragment from react above and use it like <Fragment></Fragment> or you can Use like  pro <></>
    <>
      <Header />
      <main>
       <CoreConcepts />
       <Examples />
      </main>
    </>   
  );
}

export default App;

