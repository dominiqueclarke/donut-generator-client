import { Component } from '@angular/core';

import { DonutService } from '../../services/donut.service';
import { Donut } from '../../types/donut';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  private donutService: DonutService;
  public donut: Donut;

  constructor(donutService: DonutService) {
    this.donutService = donutService;
  }
}
