const PizzaData = {
  BuildYourOwnPizza: {
    Size: ['10"', '12"', '14"', '16"', '18"'],
    Crust: {
      "Thin or X-Thin": [10.0, 12.0, 14.0, 16.0, 18.0],
      "Sicilian Style Thick": [12.0, 14.0, 16.0, 19.0, 20.0],
      "Pan Pizza": [null, 17.0, null, 24.0, null],
      "Chicago Style Deep Dish": [null, 17.0, null, 24.0, null],
      "The Original Stuffed Joe": [null, 17.0, null, 24.0, null],
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
    Size: ['12"', '14"', '16"', '18"'],
    Cost: [16.0, 20.0, 23.0, 26.0],
    Pizza: {
      "Joe's Fabulous Four":
        "A classic pizza featuring savory Italian sausage, fresh mushrooms, onions and green peppers.",
      "Joe's Vegetarian Supreme":
        "Piled high with garden-fresh mushrooms, onions, green peppers, and sliced tomatoes.",
      "Joe's Vegetarian Delight":
        "Joe's combination of spinach, mushrooms, black olives, and sliced tomatoes will make this an instant favorite of any veggie lover.",
      "Joe's BBQ Pizza":
        "Sausage, crispy, bacon, and onions with Joe's zesty BBQ Sauce.",
      "Honolulu Joe's":
        "A delightful tropical twist of Canadian bacon and sweet onions.",
      "Meaty Joe's":
        "A mighty, meaty combination of pepperoni, sausage, ground beef, bacon, and canadian bacon.",
      "Mama's White Pizza":
        "Juicy grilled chicken and fresh spinach on Mama's homemade alfredo sauce.",
      "Mama's Spicy White Pizza":
        "Juicy grilled cajun chicken and fresh spinach on Mama's homemade alfredo sauce.",
      "Joe's Cheezy Beef Pizza":
        "Our Italian beef, sweet peppers, and mozzarella with garlic butter sauce.",
      "Superbowl Pizza":
        "Blackened Chicken, Buffalo Sauce, Crumbled Blue Cheese and Mozzarella.",
      "Mama's Meatball Pizza": "With Hot or Sweet Peppers.",
      "Chef Special Pizza":
        "Roasted Whole Garlic and Butter Bottom, Artichoke, Mushroom and Spinach.",
      "Pesto Grilled Chicken Pizza":
        "Pesto & Grilled Chicken is the perfect answer to your pizza craving.",
    },
    Calzone: [
      10.5,
      "A pocket of dough generously filled with our homemade marinara and plenty of mozzarella. Baked until golden brown and delicious.",
    ],
    Panzerotti: [
      10.5,
      "Mozzarella and zesty marinara are stuffed into a dough pocket and deep fried for tasty satisfaction.",
    ],
  },
};

export default PizzaData;
