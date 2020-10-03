import { Discount } from './discount';
import { OrderStatus } from './interfaces/order-status';

export default class ShoppingCart {
  private readonly _items: CartItem[] = [];

  // injeção de dependencia (discount)
  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this.items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
