import { Component } from '@angular/core';

import { DonutService } from '../../services/donut.service';

import { Base } from '../../types/base';

@Component({
  selector: 'app-donut-base-list',
  templateUrl: './donut-base-list.component.html',
  styleUrls: ['./donut-base-list.component.css']
})
export class DonutBaseListComponent {
  private donutService: DonutService;
  public availableBases: Array<Base>;

  constructor(donutService: DonutService) {
    this.donutService = donutService;

    this.donutService.availableBases.subscribe((updatedBases: Array<Base>) => {
      this.availableBases = updatedBases;
    });
  }

  public selectBase(base) {
    this.donutService.selectBase(base);
  }

}
