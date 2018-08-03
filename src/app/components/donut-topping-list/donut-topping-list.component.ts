import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';

import { Topping } from '../../types/topping';

@Component({
  selector: 'app-donut-topping-list',
  templateUrl: './donut-topping-list.component.html',
  styleUrls: ['./donut-topping-list.component.css']
})
export class DonutToppingListComponent {
  public availableToppings: Array<Topping>;
  private donutService: DonutService;

  constructor(donutService: DonutService) {
    this.donutService = donutService;

    donutService.availableToppings.subscribe((toppings: Array<Topping>) => {
      this.availableToppings = toppings;
    });
  }

  public addTopping(topping: Topping) {
    this.donutService.addTopping(topping);
  }
}
