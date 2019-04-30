import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  lang: string;
  langList = ['en', 'ch'];
  langSubject = new BehaviorSubject<string>(this.getDefaultLang());

  constructor(private translate: TranslateService) {}

  private getDefaultLang(): string {
    this.lang = this.langList[0];
    this.translate.use(this.lang);
    return this.lang;
  }

  set(val: string): void {
    this.lang = val;
    this.translate.use(this.lang).subscribe(() => this.langSubject.next(this.lang));
  }

  langObservable(): Observable<string> {
    return this.langSubject.asObservable();
  }

  getLangList(): string[] {
    return this.langList;
  }
}