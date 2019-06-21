import { Component, OnInit, Input } from '@angular/core';
import { InitiativeItem } from '../initiative-item';

@Component({
  selector: 'app-initiative-item',
  templateUrl: './initiative-item.component.html',
  styleUrls: ['./initiative-item.component.css']
})
export class InitiativeItemComponent implements OnInit {

  constructor() { }

  @Input() public Item: InitiativeItem;
  @Input() public Index: number;

  public Vm: InitiativeItemComponent = this;
  public NewStatus: string;
  public IsAddingStatus = false;

  public InitItemClasses = {
    initiativeItem: true,
    gray: !this.isActive,
    blue: this.isActive
  };

  private get isActive(): boolean {
    console.log('index from isActive:', this.Index)
    return this.Index === 0;
  }

  ngOnInit() {
    console.log('index', this.Index)
  }

  public OnClickAddStatus() {
    this.IsAddingStatus = true;
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

}
