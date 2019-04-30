import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'hello',
  template: `
  <h1>{{'Hello' | translate}} {{name}}!</h1>
  <select #select (change)="changeLang(select.value)">
    <option *ngFor="let lang of langList" [value]="lang">{{lang}}</option>
  </select>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  langList: string[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.langList = this.languageService.getLangList();
  }

  changeLang(lang) {
    this.languageService.set(lang);
  }
}
