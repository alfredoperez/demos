import {Component} from 'angular2/core';
import {WidgetService} from './widget.service';


@Component({
    selector: 'widgets',
    templateUrl:  'app/common/widgets/widgets.html',
    styleUrls: ['app/common/widgets/widgets.css'],
    providers: [WidgetService]
})
export class Widgets{
    message: string= 'hey!';
    widgets: any[] = [];
    
    constructor(private widgetService: WidgetService){
      this.widgets = widgetService.widgets;
    }
    handleScroll(){
        console.log('scroll');
    }
}