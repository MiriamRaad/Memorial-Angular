import { Component, Input, OnInit } from '@angular/core';
import { Bookservice } from '../Bookservice';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  Books=[] as any

  // @Input() Title="Miriam";
  // @Input() Author="Raad";
  // @Input() Quote = "123";
  // @Input() ImageSource = "assets/images/WithoutMerit.jpg";

  constructor(private Bservice : Bookservice , private route : ActivatedRoute)
   {
    
   }

  ngOnInit(): void 
  { 
    var name = this.route.snapshot.paramMap.get("name")
    this.Books = this.Bservice.getbook(name)
    //console.log(this.Books)
    
  }

}

