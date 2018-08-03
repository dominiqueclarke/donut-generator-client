import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Donut } from '../types/donut';
import { Topping } from '../types/topping';
import { Base } from '../types/base';


@Injectable()
export class DonutService {
  private http: HttpClient;
  private donutService: DonutService;

  public currentToppings: Array<Topping>;
  private currentBase: Base;

  private _availableToppings: BehaviorSubject<Array<Topping>>;
  public availableToppings: Observable<Array<Topping>>;
  private _availableBases: BehaviorSubject<Array<Base>>;
  public availableBases: Observable<Array<Base>>;

  private _currentDonut: BehaviorSubject<Donut>;
  public currentDonut: Observable<Donut>;

  constructor(http: HttpClient) {
    this.http = http;

    this._currentDonut = new BehaviorSubject({toppings: [], base: {name: ''}});
    this.currentDonut = this._currentDonut.asObservable();

    this._availableToppings = new BehaviorSubject([]);
    this.availableToppings = this._availableToppings.asObservable();
    this._availableBases = new BehaviorSubject([]);
    this.availableBases = this._availableBases.asObservable();

    this.currentToppings = [];

    this.fetchToppings();
    this.fetchBases();
  }

  private fetchToppings(): void {
    this.http.get('http://localhost:8080/toppings')
    .subscribe((toppings: Array<Topping>) => {
        this._availableToppings.next(toppings);
      }
    );
  }

  private fetchBases(): void {
    this.http.get('http://localhost:8080/bases')
    .subscribe((bases: Array<Base>) => {
      this._availableBases.next(bases);
    });
  }

  public orderDonut(donut: Donut): Observable<Donut> {
    return this.http.post<Donut>('http://localhost:8080/donuts', donut);
  }

  public clearDonut(): void {
    this._currentDonut.next({toppings: [], base: {name: ''}});
  }

  public addTopping(topping: Topping): void {
    if (!this.currentToppings.includes(topping)) {
      this.currentToppings.push(topping);
    }
    this._currentDonut.next({toppings: this.currentToppings, base: this.currentBase});
  }

  public selectBase(base: Base): void {
    this.currentBase = base;
    this._currentDonut.next({toppings: this.currentToppings, base: base});
  }
}
