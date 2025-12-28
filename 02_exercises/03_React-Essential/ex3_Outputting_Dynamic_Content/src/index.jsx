import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import User from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
const userPoint = document.getElementById("rootUser");

ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(userPoint).render(<User />);