import {Injectable} from 'angular2/core';
import {PricingService} from './pricing.service';

@Injectable()
export class WidgetService {
    constructor(private pricingService: PricingService){
        this.widgets.map(widget=> {
            widget.price = pricingService.half(widget.price);
            return widget;
        })
    }
    widgets = [
        {name: 'Widget 01',price: 100},
        {name: 'Widget 01',price: 200},
        {name: 'Widget 01',price: 300},
        {name: 'Widget 01',price: 400},
        {name: 'Widget 01',price: 500},
        {name: 'Widget 01',price: 600}
    ];
}