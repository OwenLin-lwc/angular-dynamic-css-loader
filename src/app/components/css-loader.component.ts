import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'css-loader',
  template: `<link rel="stylesheet" type="text/css" [href]="path">`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CssLoaderComponent {
  cssPath: any;

  constructor(public sanitizer: DomSanitizer,
    private languageService: LanguageService,
    private cd: ChangeDetectorRef) {
      this.languageService.langObservable().subscribe(val => {
        this.cssPath = `assets/css/${val}.css`;
        this.cd.markForCheck();
      });
  }

  set path(path) {
    this.cssPath = path;
  }

  get path() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.cssPath);
  }
}