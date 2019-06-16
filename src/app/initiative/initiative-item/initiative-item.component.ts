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

  public Vm: InitiativeItemComponent = this;
  
  ngOnInit() {
  }

}
