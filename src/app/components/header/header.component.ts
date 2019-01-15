import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate, 
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'yellow'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isOpen = true;
  toggle(){
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
