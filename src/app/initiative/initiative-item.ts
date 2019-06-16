import { Character } from '../shared/characters/character';

export class InitiativeItem {
  public DisplayName: string;
  public MaxHp: number;
  public CurrentHp: number;
  public ShowHp = false;
  // move addstatus/removestatus methods
  public Status: Array<string>;

  public get StatusDisplay(): string {
    return this.Status && this.Status.length > 0 ? this.Status.join(', ') : null;
  }

  public InitiativeCount: number;

  constructor(character: Character, initiativeCount: number = null) {
    this.DisplayName = character.DisplayName;
    this.MaxHp = character.MaxHp;
    this.CurrentHp = character.MaxHp;

    if (initiativeCount === null) {
      // TODO: abstract rolling mechanics
      this.InitiativeCount = Math.floor(Math.random() * 20) + 1 + character.Attributes.Dex.Modifier;
    } else {
      this.InitiativeCount = initiativeCount;
    }
  }
}
