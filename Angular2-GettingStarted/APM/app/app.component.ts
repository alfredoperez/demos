import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
    <h1>{{pageTitle}}</h1>
    </div>
    `
})
export class AppComponent implements OnInit {
    pageTitle: string = 'Acme Product Management';
    constructor() { }

    ngOnInit() { }

}