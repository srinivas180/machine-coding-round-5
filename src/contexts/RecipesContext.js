import { createContext, useState } from "react";

import { recipesData } from "../db/recipesData";

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
    const [recipes, setRecipes] = useState(recipesData);

    // setRecipes(localStorage.getItem())

    const addRecipe = (recipe) => {
        setRecipes((recipes) => [...recipes, recipe]);
    };

    return (
        <RecipesContext.Provider value={{ recipes, addRecipe }}>
            {children}
        </RecipesContext.Provider>
    );
}
