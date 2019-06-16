import {AttributeBlock} from './attribute-block'

export class Character {

  public MaxHp: number;
  public CurrentHp: number;

  public FirstName: string;
  public LastName?: string;  
  
  public get DisplayName() : string {
    return this.FirstName + (this.LastName ? " " + this.LastName : "")
  }  

  public Attributes?: AttributeBlock;

}
