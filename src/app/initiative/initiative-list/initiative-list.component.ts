import { Component, OnInit, Input } from '@angular/core';
import { InitiativeItem } from '../initiative-item';
import { Character } from 'src/app/shared/characters/character';
import { AttributeBlock } from 'src/app/shared/characters/attribute-block';
import { PlayerChar } from 'src/app/shared/characters/player-char';
import { InitiativeService } from '../initiative.service';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.css']
})
export class InitiativeListComponent implements OnInit {

  constructor(private initSvc: InitiativeService) {
   }

  //  public Characters: Array<Character>;
  //  @Input() public InitList: Array<InitiativeItem>;
   public InitList: Array<InitiativeItem>;
  //  public Booly: boolean = false;
   public Vm: InitiativeListComponent = this;

  ngOnInit() {
    this.initSvc.CurrentOrder.subscribe(order => {
      console.log(order);
      this.InitList = order;
    });
    // this.InitList = new Array<InitiativeItem>();
    // this.Characters = new Array<Character>();

    // for (let i = 0; i < 5; i++) {
    //   let Bill = new Character();
    //   Bill.FirstName = "Bill";
    //   Bill.LastName = "Bobaggins";
    //   Bill.CurrentHp = 20;
    //   Bill.MaxHp = 20;
    //   Bill.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);

    //   let InitBill = new InitiativeItem(Bill);
    //   InitBill.Status = ["Blind", "Hasted"]

    //   this.InitList.push(InitBill);
    // }


    // const Loni = new PlayerChar();
    // Loni.FirstName = "Loni";
    // Loni.CurrentHp = 12;
    // Loni.MaxHp = 12;
    // Loni.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    // this.Characters.push(Loni);

    // const Bleth = new PlayerChar();
    // Bleth.FirstName = "Bleth";
    // Bleth.CurrentHp = 12;
    // Bleth.MaxHp = 12;
    // Bleth.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    // this.Characters.push(Bleth);

    // const Wren = new PlayerChar();
    // Wren.FirstName = "Wren";
    // Wren.CurrentHp = 12;
    // Wren.MaxHp = 12;
    // Wren.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    // this.Characters.push(Wren);

    // const Strom = new PlayerChar();
    // Strom.FirstName = "Strom";
    // Strom.CurrentHp = 12;
    // Strom.MaxHp = 12;
    // Strom.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    // this.Characters.push(Strom);

    // const Deva = new PlayerChar();
    // Deva.FirstName = "Deva";
    // Deva.CurrentHp = 12;
    // Deva.MaxHp = 12;
    // Deva.Attributes = new AttributeBlock(12, 14, 15, 11, 10, 8);
    // this.Characters.push(Deva);


    // this.Characters.forEach(cha => {
    //   let item = new InitiativeItem(cha)
    // })
  }

  // public ListItems: Array<InitiativeItem>;
  public OnClickNextInit() {
    this.initSvc.NextInit();
  }
}
