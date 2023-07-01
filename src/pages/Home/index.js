import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import { Recipe } from "../../components/Recipe";
import { RecipesContext } from "../../contexts/RecipesContext";

import "./index.css";
export function Home() {
    const { recipes, addRecipe } = useContext(RecipesContext);

    const [newRecipe, setNewRecipe] = useState({
        _id: uuid(),
        name: "",
        imageURL: "",
        cuisineType: "",
        ingredients: [],
        instructions: [],
    });

    const [showAddRecipeDialog, setShowAddRecipeDialog] = useState(false);

    const [filterBy, setFilterBy] = useState("name");
    const [searchQuery, setSearchQuery] = useState("");

    console.log(filterBy);

    let filteredRecipes = recipes;

    if (filterBy === "name") {
        filteredRecipes = filteredRecipes.filter(({ name }) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filterBy === "cuisine") {
        filteredRecipes = filteredRecipes.filter(({ cuisineType }) =>
            cuisineType.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (filterBy === "ingredients") {
        filteredRecipes = filteredRecipes.filter(({ ingredients }) =>
            ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }

    return (
        <div className="container">
            <div className="search">
                <div>
                    <label>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search for item"
                            onChange={(event) =>
                                setSearchQuery(event.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    Filters:
                    <label>
                        <input
                            type="radio"
                            name="filters"
                            value="name"
                            defaultChecked
                            onChange={(event) =>
                                setFilterBy(event.target.value)
                            }
                        />
                        Name
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="filters"
                            value="ingredients"
                            onChange={(event) =>
                                setFilterBy(event.target.value)
                            }
                        />
                        Ingredients
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="filters"
                            value="cuisine"
                            onChange={(event) =>
                                setFilterBy(event.target.value)
                            }
                        />
                        Cuisine
                    </label>
                </div>
            </div>
            <div className="recipes">
                <h2>All Recipes</h2>
                <div className="recipes__list">
                    {filteredRecipes.map((recipe) => (
                        <Recipe recipe={recipe} />
                    ))}
                    <div>
                        <button
                            className="recipe__add-btn"
                            onClick={() => {
                                setShowAddRecipeDialog(true);
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal"
                style={{ display: showAddRecipeDialog ? "block" : "none" }}
            >
                <div className="modal__content">
                    <h2>Add New Recipe</h2>
                    <div>
                        <form
                            className="modal__form"
                            onSubmit={(event) => {
                                event.preventDefault();

                                addRecipe(newRecipe);
                                setShowAddRecipeDialog(false);

                                setNewRecipe({
                                    _id: uuid(),
                                    name: "",
                                    imageURL: "",
                                    cuisineType: "",
                                    ingredients: [],
                                    instructions: [],
                                });
                                console.log("Submitted");
                            }}
                        >
                            <label>
                                Name:{" "}
                                <input
                                    type="text"
                                    name="name"
                                    value={newRecipe.name}
                                    onChange={(event) => {
                                        setNewRecipe((newRecipe) => ({
                                            ...newRecipe,
                                            name: event.target.value,
                                        }));
                                    }}
                                    required
                                />
                            </label>
                            <label>
                                Image URL:{" "}
                                <input
                                    type="url"
                                    name="imageURL"
                                    value={newRecipe.imageURL}
                                    onChange={(event) => {
                                        setNewRecipe((newRecipe) => ({
                                            ...newRecipe,
                                            imageURL: event.target.value,
                                        }));
                                    }}
                                    required
                                />
                            </label>
                            <label>
                                Cuisine Type:{" "}
                                <input
                                    type="text"
                                    name="cuisineType"
                                    value={newRecipe.cuisineType}
                                    onChange={(event) => {
                                        setNewRecipe((newRecipe) => ({
                                            ...newRecipe,
                                            cuisineType: event.target.value,
                                        }));
                                    }}
                                    required
                                />
                            </label>
                            <label>
                                Ingredients:{" "}
                                <input
                                    type="text"
                                    name="ingredients"
                                    placeholder="Seperate ingredients with comma"
                                    value={newRecipe.ingredients}
                                    onChange={(event) => {
                                        setNewRecipe((newRecipe) => ({
                                            ...newRecipe,
                                            ingredients:
                                                event.target.value.split(","),
                                        }));
                                    }}
                                    required
                                />
                            </label>
                            <label>
                                Instructions:{" "}
                                <textarea
                                    rows="15"
                                    cols="70"
                                    value={newRecipe.instructions}
                                    onChange={(event) => {
                                        setNewRecipe((newRecipe) => ({
                                            ...newRecipe,
                                            instructions:
                                                event.target.value.split(","),
                                        }));
                                    }}
                                    required
                                />
                            </label>
                            <div className="form__buttons">
                                <button
                                    type="button"
                                    className="form__cancel-btn"
                                    onClick={() => {
                                        console.log("Cancel");
                                        setShowAddRecipeDialog(false);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="form__submit-btn"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
