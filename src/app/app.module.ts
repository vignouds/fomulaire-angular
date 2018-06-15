import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TypescriptFirstComponent } from './typescript-first/typescript-first.component';
import { CombineComponent } from './combine/combine.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TypescriptFirstComponent,
    CombineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
