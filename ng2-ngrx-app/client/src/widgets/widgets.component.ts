import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {Component} from 'angular2/core'
import {WidgetsService} from './../common/services/widgets.service.ts';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetails} from './widget-details.component';
import {AppStore} from "../common/models/appstore.model";
import {Widget} from "../common/models/widget.model";

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details (saved)="saveWidget($event)"
        [widget]="selectedWidget | async"></widget-details>
      </div>
    </div>
  `,
  styles: [`
    .widgets {
      padding: 1px;
    }
  `],
  directives: [WidgetsList, WidgetDetails],
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  selectedWidget: Observable<Widget>;

  constructor(private _widgetsService: WidgetsService) {
      _widgetsService.loadWidgets()
      .subscribe(
          data=> this.widgets =data,
          error=> alert(error));
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget) {
    console.log('widget', widget);
  }
}
