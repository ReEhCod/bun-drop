export function addToOrder(order, setOrder, name, price, image) {
  const existingProduct = order.find((product) => product.name === name);
  if (existingProduct) {
    const updatedOrder = order.map((product) =>
      product.name === name
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setOrder(updatedOrder);
  } else {
    const product = {
      name: name,
      price: price,
      image: image,
      quantity: 1,
    };
    setOrder([...order, product]);
  }
}
