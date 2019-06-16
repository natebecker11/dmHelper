import { Attribute } from './attribute';

export class AttributeBlock {
  public Str: Attribute;
  public Dex: Attribute;
  public Con: Attribute;
  public Int: Attribute;
  public Wis: Attribute;
  public Cha: Attribute;

  constructor(str: number, dex: number, con: number, int: number, wis: number, cha: number) {
    this.Str = new Attribute("Strength", str);
    this.Dex = new Attribute("Dexterity", dex);
    this.Con = new Attribute("Constitution", con);
    this.Int = new Attribute("Intelligence", int);
    this.Wis = new Attribute("Wisdom", wis);
    this.Cha = new Attribute("Charisma", cha);
  }
  
}
