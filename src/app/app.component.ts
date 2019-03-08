import {Component, OnInit, ViewChild, ElementRef}  from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  
  
    constructor(private _route: ActivatedRoute) {}
    ngOnInit() {
     
    }
}