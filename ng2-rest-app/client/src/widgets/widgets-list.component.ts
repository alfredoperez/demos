import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'widgets-list',
    template: `
       <div *ngFor="#item of widgets" (click)="selected.emit(item)"
    class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{item.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{item.cost}}
    </div>
  </div>
    `
})

export class WidgetList{
   @Input() widgets:any[];
   @Output() selected = new EventEmitter();
}