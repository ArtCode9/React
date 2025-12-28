//  this is a React component 👇👇👇👇

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}



// now i  want to create new React component 
// {} in p tag element mean wanna output a dynamic value
function Header(){
    // also can pull that code {} out of the JSX code and do this 
    const des = reactDescriptions[genRandomInt(2)];

    // This JSX code 👇👇
    return(
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {des} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
} 
// if it was only js we use just to execute it: Header();   but that's not how React component use and do
// now for use this component in App() we add the Header function like this : <Header /> as you can see below
// and this is how we build React  component


// for export you can do this :  export function MyMainGoal () {...}
function MyMainGoal () {
  return (
    <div>
      <p>
        Your "My Main Goal" component should simply output some
        text that describes your main course goal (e.g., "My main goal:
        Learn React in great detail").
      </p>
    </div>
  ); 
}
// ========================

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

export { MyMainGoal };
export default App;


/* 
  App is Root component and the first component to be analyzed and render by react

  Header are a child component pf it's parent component (of the app component in this case)

  so the root component  can have component tree and deeply nested in it
*/