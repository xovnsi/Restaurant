import {Dishes} from "./app/shared/models/Dishes";
import {Tag} from "./app/shared/models/tags";
export const sample_foods: any[] = [
  {
    id:'1',
    name: 'Pizza Pepperoni',
    price: 10,
    tags: ["Italian", "Meat", "Lunch"],
    ingredients: ["Flour", "Pepper", "Cheese"],
    quantity: 5,
    maxQuantity: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-1.jpg',
    imageList: [],
    ratings: [1]
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    tags: ["Italian", "Meat", "Lunch"],
    ingredients: ["Meat", "Pepper", "Cheese"],
    quantity: 10,
    maxQuantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-2.jpg',
    imageList: [],
    ratings: [2]
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    tags: ['German', "FastFood", "Lunch"],
    ingredients: ["Roll", "Ham", "Cheese"],
    quantity: 10,
    maxQuantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-3.jpg',
    imageList: [],
    ratings: [2]
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    tags: ['French', "FastFood", "Snack"],
    ingredients: ["Potatoes", "Oil"],
    quantity: 20,
    maxQuantity: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-4.jpg',
    imageList: [],
    ratings: [3]
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    tags: ['Asian', "Soup", "Snack"],
    ingredients: ["Chicken", "Carrot"],
    quantity: 4,
    maxQuantity: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-5.jpg',
    imageList: [],
    ratings: [0]
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 9,
    tags: ["Italian", "Vegan", "Lunch"],
    ingredients: ["Tomatoes","Flour", "Pepper", "Cheese"],
    quantity: 5,
    maxQuantity: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-6.jpg',
    imageList: [],
    ratings: [2.5]
  },{
    id:'7',
    name: 'Pizza Salami',
    price: 10,
    tags: ["Italian", "Meat", "Lunch"],
    ingredients: ["Salami", "Pepper", "Cheese"],
    quantity: 12,
    maxQuantity: 12,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-7.jpg',
    imageList: [],
    ratings: [1]
  },
  {
    id:'8',
    name: 'Steak',
    price: 20,
    tags:["Italian", "Meat", "Lunch"],
    ingredients: ["Meat", "Oil", "Garlic"],
    quantity: 10,
    maxQuantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-8.jpg',
    imageList: [],
    ratings: [2]
  },
  {
    id:'9',
    name: 'Vegan Hamburger',
    price: 8,
    tags: ["German", "FastFood", "Lunch"],
    ingredients: ["Roll", "Hummus", "Vegan Cheese"],
    quantity: 10,
    maxQuantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-9.jpg',
    imageList: [],
    ratings: [5]
  },
  {
    id:'10',
    name: 'Potatoes with dill',
    price: 5,
    tags: ['Polish', "Vegetarian", "Lunch"],
    ingredients: ["Potatoes", "Butter", "Dill"],
    quantity: 10,
    maxQuantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-10.jpg',
    imageList: [],
    ratings: [5]
  },
  {
    id:'11',
    name: 'Broccoli Soup',
    price: 10,
    tags:["French", "Soup", "Snack"],
    ingredients: ["Broccoli", "Carrot"],
    quantity: 7,
    maxQuantity: 7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-11.jpg',
    imageList: [],
    ratings: [0]
  },
  {
    id:'12',
    name: 'Pizza Margarita',
    price: 6,
    tags:["Italian", "Vegetarian", "Lunch"],
    ingredients: ["Sauce","Flour", "Cheese"],
    quantity: 5,
    maxQuantity: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eros eros, sed venenatis nibh lacinia quis. Nulla condimentum et sapien vel sagittis. Aliquam ullamcorper, metus eu placerat pulvinar, diam tellus commodo odio, at fringilla lorem dolor convallis erat.",
    imageUrl: 'assets/food-12.jpg',
    imageList: [],
    ratings: [5]
  }
]


export const sample_tags:Tag[] = [
  {name: 'All', count: 6},
  {name: 'Italian', count:3},
  {name: 'German', count:1},
  {name: 'French', count:1},
  {name: 'Asian', count:1},
  {name: 'Snack', count:2},
  {name: 'Lunch', count:4},
  {name: 'Vegan', count:1}
]


