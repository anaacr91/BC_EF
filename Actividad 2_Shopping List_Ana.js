let newList = [];

let shoppingList = [
  { item: "Pan", quantity: 2, bought: false },
  { item: "Leche", quantity: 1, bought: false },
  { item: "Huevos", quantity: 12, bought: false }
];

function addItem(item, quantity) {
shoppingList.push({ item, quantity, bought: false });
  console.log(`✅ Producto añadido: ${item} (${quantity})`);
}

function removeItem(index) {
 const removed = shoppingList.splice(index, 1);
  console.log(`🗑️ Producto eliminado: ${removed[0].item}`);
}

function updateItem(index, newItem, newQuantity) {
shoppingList[index].item = newItem || shoppingList[index].item;
  shoppingList[index].quantity = newQuantity || shoppingList[index].quantity;
  console.log(`✏️ Producto actualizado `);
}

console.table(shoppingList);

console.table(newList);
