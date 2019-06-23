import { Component, OnInit, Input } from '@angular/core';
import { InitiativeItem } from '../initiative-item';
import { InitiativeService } from '../initiative.service';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.css']
})
export class InitiativeListComponent implements OnInit {

  constructor(private initSvc: InitiativeService) {
   }

   public InitList: Array<InitiativeItem>;
   public Vm: InitiativeListComponent = this;

  ngOnInit() {
    this.initSvc.CurrentOrder.subscribe(order => {
      this.InitList = order;
    });
  }

  public OnClickNextInit() {
    this.initSvc.NextInit();
  }
}
