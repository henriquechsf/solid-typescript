/**
 * SRP - Single Responsability Principle
 * Classes e métodos devem ser coesos
 * Ter somente um motivo para mudar
 */

import Messaging from './services/messaging';
import Order from './entities/order';
import Persistency from './services/persistency';
import Product from './entities/product';
import ShoppingCart from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 39.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Tenis', 159.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
