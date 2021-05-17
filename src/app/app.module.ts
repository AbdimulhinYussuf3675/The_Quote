import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormQuoteComponent } from './form-quote/form-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
