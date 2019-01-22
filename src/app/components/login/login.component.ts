import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _loginForm: FormGroup;
  _form: any;
  _authService: any;

  constructor( _form: FormBuilder, _authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._loginForm = this._form.group({
      username: new FormControl,
      password: new FormControl,
    });
  }

  onSubmit() {
    console.log(this._loginForm.value);
    this._authService.login(this._loginForm.value);
  }

}


  

