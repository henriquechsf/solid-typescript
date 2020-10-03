/**
 * DIP - Dependency Inversion Principle
 * Princípio da Inversão de Dependência
 * Módulos de alto nível não devem depender de módulos de baixo nínel
 * Ambos devem depender de abstrações
 * Dependa de abstrações, não de implementações
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações
 * Baixo acoplamento - não depender de classe concreta
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível
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
import { EnterpriseCustomer, IndividualCustomer } from './model/customer';
import { MessagingProtocol } from './model/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer(
  'Henrique',
  'Souza',
  '999.999.999-00',
);

const enterpriseCustomer = new EnterpriseCustomer(
  'Apple .Inc',
  '888.888/0001-00',
);

// exemplo de Mock para simular uma mensagem
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem Mockada!', msg);
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 39.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Tenis', 159.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
