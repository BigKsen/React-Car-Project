import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Import de BrowserRouter
import { SelectedProvider } from "./Composants/SelectedContext";  // Importer le SelectedProvider


createRoot(document.getElementById("root")).render(
 
            <App />
    
);
