import { Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { RecipeDetails } from "./pages/RecipeDetails";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            </Routes>
        </div>
    );
}

export default App;
