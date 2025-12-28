
export const userData = {
    firstName: 'Maximilian',
    lastName: 'Schwarzmuller',
    title: 'instructor',
};

function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
          {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}



function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    <User />
    </div>
    
  );
}

export default App;
