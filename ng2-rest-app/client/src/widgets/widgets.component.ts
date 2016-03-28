import {Component, OnInit} from 'angular2/core';
import { WidgetService} from './widgets.service';
import { WidgetList} from './widgets-list.component';
import { WidgetDetails} from './widgets-detail.component';

@Component({
    selector: 'widgets',
     template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <widgets-list [widgets]="widgets" (selected)="selectWidget($event)"></widgets-list>
   
    </div>
    <div class="mdl-cell mdl-cell--6-col">
       <widget-details [widget]="selected" 
                (create)="createWidget($event)"
                (update)="updateWidget($event)">
       </widget-details>
    </div>
  </div>
  `,
  directives:[WidgetList, WidgetDetails],
  providers:[WidgetService]
})

export class Widgets {
    widgets = [];
    selected={};
    constructor( private _widgetsService: WidgetService) { 
      
    }
    fetchWidgets(){
         this._widgetsService.fetchWidgets()
         .subscribe(widgets=> this.widgets = widgets);
    }
    selectWidget(widget){
        this.selected = widget;
    }
    createWidget(widget){
        console.log(widget);
    }
    updateWidget(widget){
        
    }
    ngOnInit() { }
}