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
    quantity: 10,
  },
];

const user = {
  username: "manavm1990",
  cart: [],
};

console.log(catalog[2].price.toFixed(2));

function add2Numbers(num1, num2) {
  return num1 + num2;
}

const total = add2Numbers(1, 2);

console.log(total);
