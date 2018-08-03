import { Topping } from './topping';
import { Base } from './base';

export interface Donut {
  toppings: Array<Topping>;
  base: Base;
}
