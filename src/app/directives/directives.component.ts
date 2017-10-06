import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];

  viewMode: string = 'map';

  map = (event) => {
    this.viewMode = 'map';
    event.preventDefault()
  }
  list = (event) => {
    this.viewMode = 'list';
    event.preventDefault()
  }

}
