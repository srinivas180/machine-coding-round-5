import { v4 as uuid } from "uuid";

export const recipesData = [
    {
        _id: uuid(),
        name: "Bombay Potatoes",
        imageURL:
            "https://hurrythefoodup.com/wp-content/uploads/2018/01/bombay-potatoes-6.jpg",
        cuisineType: "Indian",
        ingredients: [
            "Potatoes",
            "Curry Paste",
            "Tomato Paste",
            "Oil",
            "Curry Powder",
            "Basil",
        ],
        instructions: [
            "Preparation: Heat the oven to 200°C/390°F (a medium-high heat). Quarter the potatoes and add the salt, tomato paste, curry paste, curry powder, and oil. Give it all a good mix and make sure each potato is well covered.",
            "Cooking: Transfer the potatoes from the large pot to a sheet pan, ensuring the potatoes are spread in a single layer. Now pick from the options below, depending on how much time you have for cooking.",
            "The speedy method: Leave for 30 – 40 mins (depending on potato size). Give them a mix after 20 minutes or so. Now you have flavourful, tender potatoes and the perfect side dish!",
        ],
    },
    {
        _id: uuid(),
        name: "Cream Cheese Protein Muffins",
        imageURL:
            "https://hurrythefoodup.com/wp-content/uploads/2023/06/protein-muffins-ready.jpg",
        cuisineType: "Indian",
        ingredients: [
            "Poppy seeds",
            "Vanilla",
            "Low fat cream cheese",
            "Jam",
            "Eggs",
            "Milk",
            "Sugar",
        ],
        instructions: [
            "Switch the oven on at 200 C.",
            "Line a muffin tin with 12 paper muffin liners.",
            "In a large bowl mix the wet ingredients (poppy seeds, eggs, vegetable oil, milk, cream cheese) with the sugar until fully incorporated.",
        ],
    },
    {
        _id: uuid(),
        name: "Super Easy Baked High Protein French Toast Recipe",
        imageURL:
            "https://hurrythefoodup.com/wp-content/uploads/2023/05/protein-french-toast-ready.jpg",
        cuisineType: "French",
        ingredients: [
            "Sliced sourdough bread (preferably stale)",
            "Eggs",
            "Sugar",
            "Lemon",
            "Protein Powder",
            "Milk",
        ],
        instructions: [
            "The night before, arrange the slices of bread in a loaf tin. You might want to grease the tin with cooking spray first, if it’s not a non-stick pan.",
            "Whisk together eggs, milk, your protein powder of choice, spices, lemon zest and sugar. Pour over the bread and scatter fruit on top.",
            "Cover and leave to soak overnight in the fridge.",
        ],
    },
];
