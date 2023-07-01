import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { RecipesProvider } from "./contexts/RecipesContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <RecipesProvider>
                <App />
            </RecipesProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
