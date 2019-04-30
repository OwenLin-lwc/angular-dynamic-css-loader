import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CssLoaderComponent } from './components/css-loader.component';

export function translateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (translateLoader),
      deps: [HttpClient]
    }
  })
   ],
  declarations: [ AppComponent, HelloComponent, CssLoaderComponent ],
  bootstrap:    [ AppComponent, CssLoaderComponent ]
})
export class AppModule { }
