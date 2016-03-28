import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Colorer} from './color';
import {Items} from './items/items.component';
import {Widgets} from './widgets/widgets.component';
import {RedditService} from './reddit'

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES, Colorer ],
  providers: [RedditService]
})
@RouteConfig([
  {path: '/items', name: 'Items', component: Items, useAsDefault: true},
  {path: '/widgets', name: 'Widgets', component: Widgets}
])
export class App {
  links = {
    items: ['Items'],
    widgets: ['Widgets']
  }
  constructor(redditService: RedditService){
      redditService.fetchFrontPage();
  }
}
