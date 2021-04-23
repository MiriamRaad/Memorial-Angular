import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import { AllBooksComponent } from './all-books/all-books.component';
import { BookDataComponent } from './book-data/book-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';




 const approutes : Routes = 
[
    { path: "AllBooks" , component : AllBooksComponent},
    { path: "Book/:name" , component : BookDataComponent},
    {path : "Nav" , component : NavBarComponent},
    { path: "" , component : AllBooksComponent},
]

@NgModule({
    imports:[
      RouterModule.forRoot(approutes)
    ],
    exports:[RouterModule]
  })
  export class appRoutes
  {
  
  }
  