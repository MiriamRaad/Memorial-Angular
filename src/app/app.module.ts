import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BookfilterPipe} from "./FilterBooks.pipe"
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import { AllBooksComponent } from './all-books/all-books.component';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Bookservice } from './Bookservice';
import {appRoutes} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    AllBooksComponent,
    NavBarComponent,
    BookfilterPipe
  ],
  imports:
    [
      BrowserModule,
      HttpClientModule,
      appRoutes,
    ],

  providers: [Bookservice, BookfilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
