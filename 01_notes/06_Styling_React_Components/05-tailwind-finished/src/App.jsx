import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
        <div className="min-h-screen bg-cyan-700 flex justify-center items-center">
      <h1 className="text-5xl text-white font-bold">
        Tailwind v4 Is Working! 💪
      </h1>
      </div>
      </main>
    </>
  );
}