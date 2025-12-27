//  this is a React component 👇👇👇👇
// now i  want to create new React component 
function Header(){
    return(
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
} 
// if it was only js we use just to execute it: Header();   but that's not how React component use and do
// now for use this component in App() we add the Header function like this : <Header /> as you can see below
// and this is how we build React  component

//  This App function belong to raw code file 
function App() {
  return (
    <div>
      <Header />          
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
