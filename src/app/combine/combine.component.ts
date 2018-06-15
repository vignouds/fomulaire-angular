import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isPrefixNartawakValidator} from "../password.validator";
import {User} from "../model/User";

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.css']
})
export class CombineComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  user: User = new User('Nartawak', 'test');

  constructor(fb: FormBuilder) {

  // Création des contrôles
  this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
  this.passwordCtrl = fb.control('', [isPrefixNartawakValidator]);

  this.userForm = fb.group({
  email: this.emailCtrl,
  password: this.passwordCtrl
  });
  }

  handleClear() {
  this.user.email = '';
  this.user.password = '';
  }
  
  handleSubmit() {
  console.log(this.user);
  }

  ngOnInit() {
  }

}
