import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InitiativeItem } from './initiative-item';
import { Character } from '../shared/characters/character';

@Injectable({
  providedIn: 'root'
})
export class InitiativeService {

  private order: Array<InitiativeItem>;
  private orderSource = new BehaviorSubject(this.order);
  private currentSource: BehaviorSubject<InitiativeItem>;

  public CurrentOrder = this.orderSource.asObservable();
  public CurrentChar: Observable<InitiativeItem>;

  public SetInitialOrder(order: Array<InitiativeItem>): void {
    this.order = order;

    this.currentSource = new BehaviorSubject(order[0]);
    this.CurrentChar = this.currentSource.asObservable();

    this.pushOrder();
  }

  public NextInit() {
    const currentChar = this.order[0];
    const newList = this.order.slice(1).concat(currentChar);
    this.order = newList;
    this.pushOrder();
  }

  public RemoveCharacter(index: number) {
    if (index === 0) {
      const newList = this.order.slice(1);
      this.order = newList;
    } else {
      const firstHalf = this.order.slice(0, index);
      const secondHalf = this.order.slice(index + 1);
      this.order = firstHalf.concat(secondHalf);
    }
    this.pushOrder();
  }

  private pushOrder() {
    this.orderSource.next(this.order);
    this.currentSource.next(this.order[0]);
  }


  constructor() { }
}
