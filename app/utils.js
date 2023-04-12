export const sayHello = (registeredUser) => `Hello, ${registeredUser.username}`;

export const calculateTotal = (price, quantity) => {
  return price * quantity;
};

export const createCard = (item) =>
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
