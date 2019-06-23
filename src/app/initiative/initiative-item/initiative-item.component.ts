import { Component, OnInit, Input } from '@angular/core';
import { InitiativeItem } from '../initiative-item';
import { InitiativeService } from '../initiative.service';

@Component({
  selector: 'app-initiative-item',
  templateUrl: './initiative-item.component.html',
  styleUrls: ['./initiative-item.component.css']
})
export class InitiativeItemComponent implements OnInit {

  constructor(private initSvc: InitiativeService) { }

  @Input() public Item: InitiativeItem;
  @Input() public Index: number;


  public Vm: InitiativeItemComponent = this;
  public NewStatus: string;
  public IsAddingStatus = false;
  public IsActive: boolean;

  public InitItemClasses = {
    initiativeItem: true,
    gray: !this.IsActive,
    blue: this.IsActive
  };


  ngOnInit() {
    this.initSvc.CurrentChar.subscribe(char => {
      console.log(`order name is ${char.DisplayName}, our name is ${this.Item.DisplayName}`);
      this.IsActive = char.DisplayName === this.Item.DisplayName;
      if (this.IsActive) {
        console.log(`I'm ${this.Item.DisplayName} and i'm active`);
      }
    });

  }

  public OnClickAddStatus() {
    this.IsAddingStatus = true;
    this.onFocusInput();
  }

  public OnClickSaveStatus() {
    this.Item.Status.push(this.NewStatus);
    this.IsAddingStatus = false;
    this.NewStatus = '';
  }

  public OnPressEnter(event: any) {
    if (event.key === 'Enter') {
      this.Item.Status.push(this.NewStatus);
      this.IsAddingStatus = false;
      this.NewStatus = '';
    }
  }

  public OnClickRemoveStatus(i: number) {
    this.Item.Status = this.Item.Status.filter((stat, index) => index !== i);
  }

  public OnBlur() {
    this.IsAddingStatus = false;
    this.NewStatus = '';
  }

  private onFocusInput() {
    setTimeout(() => {
      const inputEl = document.querySelector(`input[data-index="${this.Index}"]`) as HTMLElement;
      inputEl.focus();
    }, 5);
  }
}
