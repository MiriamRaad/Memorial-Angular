import { Component, OnInit , OnChanges, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Bookservice } from '../Bookservice';

@Component({
  selector: 'all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
 export class AllBooksComponent implements OnInit 
{
  
  @Input() filterby ? : string = "all" as string;

  data = ['123'] as any 
  constructor(private  svc : Bookservice , private apiCaller : HttpClient ) 
   {
    
    this.data = this.svc.getbooks();
    
    // fetch('https://memorial-books-data.herokuapp.com/YA_Books')
    // .then(response => response.json())
    // .then(json => 
    //   {
    //     this.data = json
        
    //   });

    
  }
  
  ngOnInit(): void 
  {

    // this.apiCaller.get('https://memorial-books-data.herokuapp.com/YA_Books')
    // .subscribe((res=[]) => {this.data = res })

    // this.svc.BookData = this.data
    // console.log(this.svc.BookData)
  }

  // ngOnChanges()
  // {
  //     this.svc.Bookservice = this.data
  // }, OnChanges
}



