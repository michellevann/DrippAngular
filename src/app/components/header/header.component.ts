import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  animations: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  isOpen = true;
  toggle(){
    this.isOpen = !this.isOpen;
  }
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this._authService.loggedIn();
  }
  onLogout() {
    this._authService.logout();
  }

}
