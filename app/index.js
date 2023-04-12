import { v4 as uuidv4 } from "uuid";

import { createCard } from "./utils.js";
const catalog = [
  {
    id: "1",
    name: "apple",
    price: 1.0,
    category: "food",
    quantity: 10,
  },
  {
    id: "2",
    name: "banana",
    price: 1.0,
    category: "food",
    quantity: 10,
  },
  {
    id: "3",
    name: "shirt",
    price: 10.0,
    category: "food",
    quantity: 10,
  },
  {
    id: "4",
    name: "pants",
    price: 15.0,
    category: "clothing",
    quantity: 10,
  },
  {
    id: "5",
    name: "shoes",
    price: 20.0,
    category: "clothing",
    quantity: 10,
  },
  {
    id: "6",
    name: "computer",
    price: 1000.0,
    category: "electronics",
    quantity: 50,
  },
];

const user = {
  username: "manavm1990",
  cart: [],
};

const sayHello = (registeredUser) => `Hello, ${registeredUser.username}`;

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
function calculateTotal(price, quantity) {
  return price * quantity;
}

const createCard = (item) =>
  `
  <section>
  <h2>${item.name}</h2>
  <u1>
  <li>Price : $${item.price}</li>
  <li>Category: ${item.category}</li>
  <li>Quantity: ${item.quantity}</li>
  </u1>
  <button>Add to Cart</button>
  </section>
  `;

const catalogHTML = catalog.map(createCard).join("");

const { username } = ussr;

console.log(catalogHTML);
