import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup;
  constructor(private _form: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this._loginForm = this._form.group({
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }
}
