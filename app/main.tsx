import { createRoot } from "react-dom/client";
import App from "./frontend/components/App.js";

const app: HTMLElement | null = document.getElementById("root");

if (app) createRoot(app).render(<App />);
