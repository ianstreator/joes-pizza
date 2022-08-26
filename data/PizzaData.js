const PizzaData = {
  BuildYourOwnPizza: {
    Size: [10, 12, 14, 16, 18],
    Crust: {
      "Thin or X-Thin": [10.0, 12.0, 14.0, 16.0, 18.0],
      "Sicilian Style Thick Crust": [12.0, 14.0, 16.0, 19.0, 20.0],
      "Pan Pizza": [null, 17.0, null, 24.0, null],
      "Chicago Style Deep Dish": [null, 17.0, null, 24.0, null],
      "Original Stuffed Joe": [null, 17.0, null, 24.0, null],
      'Gluten Free 12" Only': [null, 12.0, null, null, null],
    },
    Toppings: {
      Price: {
        Full: [2.0, 2.25, 2.5, 2.75, 3.0],
        Half: [1.0, 1.15, 1.25, 1.35, 1.5],
      },
      Types: {
        Meat: [
          "Sausage",
          "Pepperoni",
          "Ground Beef",
          "Chicken",
          "Canadian Bacon",
          "Shrimp",
          "Italian Beef",
          "Anchovies",
        ],
        Vegetables: [
          "Fresh Garlic",
          "Sliced Tomatoes",
          "Spinach",
          "Mushrooms",
          "Onions",
        ],
        Cheese: ["Cheddar Cheese", "Ricotta Cheese"],
        Other: [
          "Hot Giardiniera",
          "Jalapenos",
          "Green Peppers",
          "Pineapple",
          "Green Olives",
          "Black Olives",
        ],
      },
    },
  },

  SpecialtyPizza: {
    Size_Cost: [
      { size: 12, cost: 16 },
      { size: 14, cost: 20 },
      { size: 16, cost: 23 },
      { size: 18, cost: 26 },
    ],
    Pizza: [
      {
        name: "Joe's Fabulous Four",
        description:
          "A classic pizza featuring savory Italian sausage, fresh mushrooms, onions and green peppers.",
      },
      {
        name: "Joe's Vegetarian Supreme",
        description:
          "Piled high with garden-fresh mushrooms, onions, green peppers, and sliced tomatoes.",
      },
      {
        name: "Joe's Vegetarian Delight",
        description:
          "Joe's combination of spinach, mushrooms, black olives, and sliced tomatoes will make this an instant favorite of any veggie lover.",
      },
      {
        name: "Joe's BBQ Pizza",
        description:
          "Sausage, crispy, bacon, and onions with Joe's zesty BBQ Sauce.",
      },
      {
        name: "Honolulu Joe's",
        description:
          "A delightful tropical twist of Canadian bacon and sweet onions.",
      },
      {
        name: "Meaty Joe's",
        description:
          "A mighty, meaty combination of pepperoni, sausage, ground beef, bacon, and canadian bacon.",
      },
      {
        name: "Mama's White Pizza",
        description:
          "Juicy grilled chicken and fresh spinach on Mama's homemade alfredo sauce.",
      },
      {
        name: "Mama's Spicy White Pizza",
        description:
          "Juicy grilled cajun chicken and fresh spinach on Mama's homemade alfredo sauce.",
      },
      {
        name: "Joe's Cheezy Beef Pizza",
        description:
          "Our Italian beef, sweet peppers, and mozzarella with garlic butter sauce.",
      },
      {
        name: "Superbowl Pizza",
        description:
          "Blackened Chicken, Buffalo Sauce, Crumbled Blue Cheese and Mozzarella.",
      },
      {
        name: "Mama's Meatball Pizza",
        description: "With Hot or Sweet Peppers.",
      },
      {
        name: "Chef Special Pizza",
        description:
          "Roasted Whole Garlic and Butter Bottom, Artichoke, Mushroom and Spinach.",
      },
      {
        name: "Pesto Grilled Chicken Pizza",
        description:
          "Pesto & Grilled Chicken is the perfect answer to your pizza craving.",
      },
    ],
    Other: [
      {
        name: "Calzone",
        description:
          "A pocket of dough generously filled with our homemade marinara and plenty of mozzarella. Baked until golden brown and delicious.",
      },
      {
        name: "Panzerotti",
        description:
          "Mozzarella and zesty marinara are stuffed into a dough pocket and deep fried for tasty satisfaction.",
      },
    ],
  },
};

export default PizzaData;
