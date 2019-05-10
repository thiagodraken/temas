import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
    return localStorage.getItem('access_token');
  }
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: tokenGetter
            }
        })
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
