import ReactDOM from "react-dom/client";  // this belong to overall react lib

import App from "./App.jsx";
import { MyMainGoal } from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);  // this is JSX export coder here

const entryPoint2 = document.getElementById("root2");
ReactDOM.createRoot(entryPoint2).render(<MyMainGoal />);  // createRoot is method
