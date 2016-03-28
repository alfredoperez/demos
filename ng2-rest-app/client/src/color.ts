import {Directive, ElementRef, Input, OnInit} from 'angular2/core';

@Directive({
    selector:'[colorer]',
    host:{
        '(mouseenter)' : 'color()',
          '(mouseleave)' : 'colorBlack()',
    }
})
export class Colorer implements OnInit{
    @Input('dc') defaultColor: string;
    constructor(private _el: ElementRef){
       
    }
    ngOnInit(){
        this._el.nativeElement.style.color = this.defaultColor;
    }
    color(){
          this._el.nativeElement.style.color = 'red';
    }
      colorBlack(){
          this._el.nativeElement.style.color = 'blue';
    }
}