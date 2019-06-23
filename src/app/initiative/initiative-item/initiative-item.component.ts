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
      this.IsActive = char.DisplayName === this.Item.DisplayName;
    });

  }

  public OnClickAddStatus() {
    this.IsAddingStatus = true;
    this.setFocusInput();
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

  public OnClickCancelAddStatus() {
    this.IsAddingStatus = false;
    this.NewStatus = '';
  }

  public OnClickRemoveCharacter() {
    this.initSvc.RemoveCharacter(this.Index);
  }

  private setFocusInput() {
    setTimeout(() => {
      const inputEl = document.querySelector(`input[data-index="${this.Index}"]`) as HTMLElement;
      inputEl.focus();
    }, 5);
  }
}
