/**
 * LSP - Liskov Substitution Principle
 * Princípio da substituição de Liskov
 * Subclasses devem ser substituiveis por qualquer subclasse do mesmo tipo
 * Não alterar o comportamento dos métodos das subclasses
 */

import Messaging from './services/messaging';
import Order from './model/order';
import Persistency from './services/persistency';
import Product from './model/product';
import ShoppingCart from './model/shopping-cart';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './model/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 39.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Tenis', 159.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
