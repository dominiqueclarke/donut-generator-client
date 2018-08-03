import { Component } from '@angular/core';
import { Donut } from '../../types/donut';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-order',
  templateUrl: './donut-order.component.html',
  styleUrls: ['./donut-order.component.css']
})
export class DonutOrderComponent {
  public donut: Donut;
  private donutService: DonutService;

  constructor(donutService: DonutService) {
    this.donutService = donutService;
    donutService.currentDonut.subscribe(updatedDonut => {
      this.donut = updatedDonut;
    });
  }

  public orderDonut(donut: Donut) {
    this.donutService.orderDonut(donut).subscribe(() => {
      this.donutService.clearDonut();
    });
  }
}
