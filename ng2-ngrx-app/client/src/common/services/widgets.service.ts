import {    Http,    Headers} from 'angular2/http';
import {    Injectable} from 'angular2/core';
import {    Widget}
from "../models/widget.model";
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class WidgetsService {
    widgets: Widget[] = [];

    constructor(private http: Http) {}
    add(widget: Widget) {
        this.http.post(BASE_URL, JSON.stringify(widget), HEADER)
            .map(res => res.json())
            .do(data => {
                this.widgets = [...this.widgets, data];
                return data;
            })
    }

    remove(widget: Widget) {
        this.http.delete(`${BASE_URL}?id=${widget.id}`)
            .map(res => res.json())
            .do(removed => {
                this.widgets = this.widgets.filter(x => x.id !== removed.id);
            })
    }

    update(widget: Widget, update) {
        return this.http.put(`${BASE_URL}?id=${widget.id}`, JSON.stringify(update), HEADER)
            .map(res => res.json())
            .do(updated => {
                const index = this.widgets.indexOf(widget);
                if (index > -1) {
                    this.widgets = [
                        ...this.widgets.slice(0, index),
                        Object.assign({}, this.widgets[index], update),
                        ...this.widgets.slice(index + 1)
                    ];
                }
            });
    }
    loadWidgets() {
        return this.http.get(BASE_URL)
            .map(res => res.json())
            .do(json=> this.widgets = json);
    }
}