import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  return (
    // <> is fragment root jsx element then may contain as many
    // children and sibling elements as needed
    <> 
      <Header />
      <UserInput />
    </>
  )
}

export default App
