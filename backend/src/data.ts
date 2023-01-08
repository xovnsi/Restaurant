
export const sample_foods: any[] = [
  {
    id:'1',
    name: 'Pizza Pepperoni',
    price: 10,
    cuisine: 'Italian',
    type: "Meat",
    category: "Lunch",
    ingredients: ["Flour", "Pepper", "Cheese"],
    quantity: 5,
    maxQuantity: 50,
    description: "",
    imageUrl: 'assets/food-1.jpg',
    ratings: 1
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    cuisine: 'Italian',
    type: "Meat",
    category: "Lunch",
    ingredients: ["Meat", "Pepper", "Cheese"],
    quantity: 10,
    maxQuantity: 10,
    description: "",
    imageUrl: 'assets/food-2.jpg',
    ratings: 2
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    cuisine: 'German',
    type: "FastFood",
    category: "Lunch",
    ingredients: ["Roll", "Ham", "Cheese"],
    quantity: 7,
    maxQuantity: 10,
    description: "",
    imageUrl: 'assets/food-3.jpg',
    ratings: 2,

  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    cuisine: 'French',
    type: "FastFood",
    category: "Snack",
    ingredients: ["Potatoes", "Oil"],
    quantity: 10,
    maxQuantity: 20,
    description: "",
    imageUrl: 'assets/food-4.jpg',
    ratings: 3
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    cuisine: 'Asian',
    type: "Soup",
    category: "Snack",
    ingredients: ["Chicken", "Carrot"],
    quantity: 1,
    maxQuantity: 4,
    description: "",
    imageUrl: 'assets/food-5.jpg',
    ratings: 0
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 9,
    cuisine: 'Italian',
    type: "Vegan",
    category: "Lunch",
    ingredients: ["Tomatoes","Flour", "Pepper", "Cheese"],
    quantity: 5,
    maxQuantity: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-6.jpg',
    ratings: 2.5
  },
]

export const sample_tags:any[] = [
  {name: 'All', count: 6},
  {name: 'Italian', count:3},
  {name: 'German', count:1},
  {name: 'French', count:1},
  {name: 'Asian', count:1},
  {name: 'Snack', count:2},
  {name: 'Lunch', count:4},
  {name: 'Vegan', count:1}
]

export const sample_users: any[] = [
  {
    name: "John Doe",
    username: "johnm",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    username: "Janeom",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];

