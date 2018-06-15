import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  user: User = new User('Nartawak', 'test');

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(value){
    console.log('SUBMIT', this.user);
  }

}
