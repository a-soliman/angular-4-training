import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title = 'Binding'
  imageUrl = 'https://image.freepik.com/free-icon/open-laptop-computer-with-pixel-boxes_318-39349.jpg';
  imageWidth = '200';

  withBorder = true;
  isActive = false;

  colSpan = 2;

  log($event) {
    console.log('Button was Clicked');
    $event.target.innerHTML = 'Clicked!'
    
  }

  email = 'ahmed@example.com'

  onKey() {
    console.log('keyup');
    console.log(this.email);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
