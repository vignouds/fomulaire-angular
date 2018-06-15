import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isPrefixNartawakValidator} from "../password.validator";

@Component({
  selector: 'app-typescript-first',
  templateUrl: './typescript-first.component.html',
  styleUrls: ['./typescript-first.component.css']
})
export class TypescriptFirstComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.emailCtrl=fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl=fb.control('', [isPrefixNartawakValidator]);

    this.userForm=fb.group({
      email:this.emailCtrl,
      password:this.passwordCtrl
    });
  }

  handleClear(){
    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  handleSubmit(){
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}
