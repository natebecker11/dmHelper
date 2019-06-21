import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InitiativeItem } from './initiative-item';

@Injectable({
  providedIn: 'root'
})
export class InitiativeService {

  private order: Array<InitiativeItem>;
  private orderSource = new BehaviorSubject(this.order);

  public CurrentOrder = this.orderSource.asObservable();

  public SetInitialOrder(order: Array<InitiativeItem>): void {
    this.order = order;
    this.orderSource.next(order);
  }

  public NextInit() {
    const currentChar = this.order[0];
    const newList = this.order.slice(1).concat(currentChar);
    this.order = newList;
    this.orderSource.next(newList);
  }


  constructor() { }
}
