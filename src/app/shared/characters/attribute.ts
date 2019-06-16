export class Attribute {
  public Name: string;
  public Score: number;

  constructor(name, score) {
    this.Name = name;
    this.Score = score;
  }
  
  public get Modifier() : number {
    return Math.floor((this.Score - 10) / 2)
  };
  
  public get Short() : string {
    return this.Name.slice(0,3).toUpperCase();
  };  
}
