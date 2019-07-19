import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
public show:boolean=true;
public color=['red','blue','green']
colors="blue";
size = 16;
selectedIndex:number;
  constructor() { }

  ngOnInit() {
  }
  clickOnRow(){
this.selectedIndex=1;
  }
}
