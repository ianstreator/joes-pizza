const prices = [
  { size: '12"', price: 16 },
  { size: '14"', price: 20 },
  { size: '16"', price: 23 },
  { size: '18"', price: 26 },
];
const PizzaData = {
  BuildYourOwnPizza: {
    Sizes: {
      "Extra Small": 10,
      "Small": 12,
      "Medium": 14,
      "Large": 16,
      "Extra Large": 18,
    },
    Crusts: {
      "Thin or X-Thin": {
        "Extra Small": 10.0,
        "Small": 12.0,
        "Medium": 14.0,
        "Large": 16.0,
        "Extra Large": 18.0,
      },
      "Sicilian Style Thick Crust": {
        "Extra Small": 12.0,
        "Small": 14.0,
        "Medium": 16.0,
        "Large": 19.0,
        "Extra Large": 20.0,
      },
      "Pan Pizza": {
        "Small": 17.0,
        "Large": 24.0,
      },
      "Chicago Style Deep Dish": {
        "Small": 17.0,
        "Large": 24.0,
      },
      "Original Stuffed Joe": {
        "Small": 17.0,
        "Large": 24.0,
      },
      "Gluten Free": {
        "Small": 12.0,
      },
    },
    Toppings: {
      Price: {
        Full: {
          "Extra Small": 2,
          "Small": 2.25,
          "Medium": 2.5,
          "Large": 2.75,
          "Extra Large": 3.0,
        },
        Half: {
          "Extra Small": 1.0,
          "Small": 1.15,
          "Medium": 1.25,
          "Large": 1.35,
          "Extra Large": 1.5,
        },
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
        Veggie: [
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
    Pizza: [
      {
        name: "Joe's Fabulous Four",
        prices,
        description:
          "Savory Italian sausage, fresh mushrooms, onions and green peppers.",
      },
      {
        name: "Joe's Vegetarian Supreme",
        prices,

        description:
          "Garden-fresh mushrooms, onions, green peppers, and sliced tomatoes.",
      },
      {
        name: "Joe's Vegetarian Delight",
        prices,

        description: "Spinach, mushrooms, black olives, and sliced tomatoes.",
      },
      {
        name: "Joe's BBQ Pizza",
        prices,

        description:
          "Sausage, crispy, bacon, and onions with Joe's zesty BBQ Sauce.",
      },
      {
        name: "Honolulu Joe's",
        prices,

        description: "Canadian bacon and sweet onions.",
      },
      {
        name: "Meaty Joe's",
        prices,

        description:
          "Pepperoni, sausage, ground beef, bacon, and canadian bacon.",
      },
      {
        name: "Mama's White Pizza",
        prices,

        description:
          "Juicy grilled chicken and fresh spinach on Mama's homemade alfredo sauce.",
      },
      {
        name: "Mama's Spicy White Pizza",
        prices,

        description:
          "Juicy grilled cajun chicken and fresh spinach on Mama's homemade alfredo sauce.",
      },
      {
        name: "Joe's Cheezy Beef Pizza",
        prices,

        description:
          "Italian beef, sweet peppers, and mozzarella with garlic butter sauce.",
      },
      {
        name: "Superbowl Pizza",
        prices,

        description:
          "Blackened Chicken, Buffalo Sauce, Crumbled Blue Cheese and Mozzarella.",
      },
      {
        name: "Mama's Meatball Pizza",
        prices,

        description: "With Hot or Sweet Peppers.",
      },
      {
        name: "Chef Special Pizza",
        prices,

        description:
          "Roasted Whole Garlic and Butter Bottom, Artichoke, Mushroom and Spinach.",
      },
      {
        name: "Pesto Grilled Chicken Pizza",
        prices,

        description:
          "Pesto & Grilled Chicken is the perfect answer to your pizza craving.",
      },
    ],
    Other: [
      {
        name: "Calzone",
        price: 10.5,
        description:
          "A pocket of dough filled with our homemade marinara and mozzarella. Baked until golden brown and delicious.",
      },
      {
        name: "Panzerotti",
        price: 10.5,
        description:
          "Mozzarella and zesty marinara are stuffed into a dough pocket and deep fried for tasty satisfaction.",
      },
    ],
  },
};

export default PizzaData;
