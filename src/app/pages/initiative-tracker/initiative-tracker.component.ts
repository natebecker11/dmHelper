import { Component, OnInit } from '@angular/core';
import { PlayerChar } from 'src/app/shared/characters/player-char';
import { AttributeBlock } from 'src/app/shared/characters/attribute-block';
import { MonsterChar } from 'src/app/shared/characters/monster-char';
import { InitiativeItem } from 'src/app/initiative/initiative-item';
import { Character } from 'src/app/shared/characters/character';

@Component({
  selector: 'app-initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.css']
})
export class InitiativeTrackerComponent implements OnInit {

  public PlayerChars: Array<{char: PlayerChar, selected: boolean}>;
  public Monsters: Array<{char: MonsterChar, selected: boolean}>;

  public PreInitList: Array<{char: Character, score: number}>;
  public InitList: Array<InitiativeItem>;

  public newName: string;
  // public newScore: number;
  public newMaxHp = 1;
  public newQuantity = 1;

  public Phase = 1;

  constructor() { }

  ngOnInit() {
    this.Monsters = new Array<{char: MonsterChar, selected: boolean}>();
    this.PreInitList = new Array<{char: Character, score: number}>();
    this.InitList = new Array<InitiativeItem>();
    this._setChars();
  }

  public OnClickNext(): void {
    if (this.Phase === 1) {
      this._startPreInit();
    } else if (this.Phase === 2) {
      this._startTracking();
    }
  }

  public OnClickAddMonster(): void {
    if (this.newQuantity > 1) {
      for (let i = 0; i < this.newQuantity; i++) {
        const newMon = new MonsterChar();

        newMon.FirstName = this.newName;
        newMon.MaxHp = this.newMaxHp;
        newMon.Iteration = i + 1;

        this.Monsters.push({char: newMon, selected: true});
      }
    } else {
      const newMon = new MonsterChar();

      newMon.FirstName = this.newName;
      newMon.MaxHp = this.newMaxHp;
      newMon.Iteration = 0;

      this.Monsters.push({char: newMon, selected: true});
    }
    this._resetMonster();
  }

  private _setChars() {
    this.PlayerChars = new Array<{char: PlayerChar, selected: boolean}>();

    const Loni = new PlayerChar();
    Loni.FirstName = 'Loni';
    Loni.CurrentHp = 12;
    Loni.MaxHp = 12;
    Loni.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    this.PlayerChars.push({char: Loni, selected: true});

    const Bleth = new PlayerChar();
    Bleth.FirstName = 'Bleth';
    Bleth.CurrentHp = 12;
    Bleth.MaxHp = 12;
    Bleth.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    this.PlayerChars.push({char: Bleth, selected: true});

    const Wren = new PlayerChar();
    Wren.FirstName = 'Wren';
    Wren.CurrentHp = 12;
    Wren.MaxHp = 12;
    Wren.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    this.PlayerChars.push({char: Wren, selected: true});

    const Strom = new PlayerChar();
    Strom.FirstName = 'Strom';
    Strom.CurrentHp = 12;
    Strom.MaxHp = 12;
    Strom.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    this.PlayerChars.push({char: Strom, selected: true});

    const Deva = new PlayerChar();
    Deva.FirstName = 'Deva';
    Deva.CurrentHp = 12;
    Deva.MaxHp = 12;
    Deva.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    this.PlayerChars.push({char: Deva, selected: true});
  }

  private _resetMonster() {
    this.newName = null;
    this.newMaxHp = 1;
    this.newQuantity = 1;
  }

  private _startPreInit() {
    this.PreInitList = this.PlayerChars
      .concat(this.Monsters)
      .filter(chr => chr.selected)
      .map(({char}) => {
        return {char, score: null};
      });
    this.Phase = 2;
  }

  private _startTracking() {
    this.InitList = this.PreInitList
      .map(({char, score}) => new InitiativeItem(char, score))
      .sort((a, b) => {
        if (a.InitiativeCount < b.InitiativeCount) {
          return 1;
        } else if (a.InitiativeCount > b.InitiativeCount) {
          return -1;
        } else {
          return 0;
        }
      });
    this.Phase = 3;
  }
}
