import { Character } from './character';

export class MonsterChar extends Character {
  public Iteration: number;
  public get DisplayName(): string {
    const simpleDisplay =  this.FirstName + (this.LastName ? ' ' + this.LastName : '');

    if (this.Iteration) {
      return simpleDisplay + ' ' + this.Iteration.toString();
    } else {
      return simpleDisplay;
    }
  }
}
