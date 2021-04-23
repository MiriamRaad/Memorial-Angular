import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';


@Injectable()

export class Bookservice 
{
    BookData = ['']  as any

    getbooks()
    {
        return this.BookData = Book.slice(0)
    }  

    getbook(name :any )
    {   
        return Book.slice(0).find(Book => Book.Name == name)
        //return Book[index] 

    }

    constructor(private apiCaller : HttpClient ) 
        {   
            
        }

    
}   

const Book = [
    {"Name": "Without Merit ",
    "Author": "Colleen Hoover",
    "Quote": "Not every mistake deserves a consequence. Sometimes the only thing it deserves is forgiveness.",
    "Price": "40 000 L.L ",
    "Rate": 3.9,
    "Category": "YA",
    "Image_Source": "assets\\images\\WithoutMerit.jpg",},

    {"Name": "The Hate You Give ",
    "Author": "Angie Thomas",
    "Quote": "Brave doesn't mean you're not scared. It means you go on even though you're scared.",
    "Price": "45 000 L.L ",
    "Rate": 4.51,
    "Category": "YA",
    "Image_Source": "assets\\images\\TheHateYouGive.jpg",

    },
    {
        "Name": "Confess",
        "Author": "Coleen Hoover",
        "Quote": "Sometimes we don’t get second chances, Owen. Sometimes things just end",
        "Price": "40 000",
        "Rate": 4.5,
        "Category": "YA",
        "Image_Source": "assets\\images\\Confess.jpg"
    },
    {
        "Name": "Every Day",
        "Author": "David Levithan",
        "Quote": "Some days are like this. And the only way to get through them is to remember that they are only one day, and that every day ends.",
        "Price": "35 000 L.L ",
        "Rate": 3.93,
        "Category": "YA",
        "Image_Source": "assets\\images\\EveryDay.jpg",
    },
   

    {
        "Name": "A Brief History Of Time",
        "Author": "Stephen Hawking",
        "Quote": "If time travel is possible, where are the tourists from the future?",
        "Price": "60 000 L.L ",
        "Rate": 4.2,
        "Category": "SC",
        "Image_Source": "assets\\images\\A Brief History Of Time.jpg",
    },

    {   
        "Name": "Astrophysics for Young\r\nPeople in a Hurry",
        "Author": "Neil deGrasse Tyson",
        "Quote": "The universe is under no obligation to make sense to you",
        "Price": "45 000 L.L ",
        "Rate": 4.28,
        "Category": "SC",
        "Image_Source": "assets\\images\\Astrophysics for Young People in a Hurry.jpg",

    },
   
    {
        "Name": "This book will blow your mind",
        "Author": " New Scientist",
        "Quote": "You don't need a spaceship to travel to the extremes of science. You just need this book.",
        "Price": "40 000 L.L ",
        "Rate": 3.44,
        "Category": "SC",
        "Image_Source": "assets\\images\\This book will blow your mind.jpg",
    },

   
    {
        "Name": "Ugly Love",
        "Author": "Coleen Hoover",
        "Quote": "Sometimes not speaking says more than all the words in the world.",
        "Price": "45 000",
        "Rate": 4.2,
        "Category": "YA",
        "Image_Source": "assets\\images\\UglyLove.jpg"
    },
    {
        "Name": "Wild",
        "Author": "Cheryl Strayed",
        "Quote": "There was the woman I was before my mom died and the one I was now, my old life sitting on the surface of me like a bruise.",
        "Price": "50 000",
        "Rate": 4,
        "Category": "YA",
        "Image_Source": "assets\\images\\Wild.jpg"
    },
    {
        "Name": "This Is How It Happened",
        "Author": "Paula Stokes",
        "Quote": "We can’t define people by their worst actions",
        "Price": "35 000",
        "Rate": 3.8,
        "Category": "YA",
        "Image_Source": "assets\\images\\Thisishowithappened.jpg"
    },
    {
        "Name": "In case you Missed it",
        "Author": "Lindsey Kelk",
        "Quote": "The only difference between a fresh start and ‘oh my god, my life is a complete failure’ is a good attitude and the right Instagram caption.",
        "Price": "30 000",
        "Rate": 3.8,
        "Category": "YA",
        "Image_Source": "assets\\images\\Incaseyoumissedit.jpg"
    },
    {
        "Name": "Bint El Khyatta",
        "Author": "Joumana Haddad",
        "Quote": "Between life and walls that never become a home, caterpillars that did not turn into butterflies, and a broken time machine that will always separate us",
        "Rate": 4.5,
        "Category": "YA",
        "Image_Source": "assets\\images\\Bintlkhiyata.jpg"
    },
    {
        "Name": "The Marriage Lie",
        "Author": "Kimberly Belle",
        "Quote": "The more messed up the parents, the more messed up the kid.",
        "Price": "40 000",
        "Rate": 4,
        "Category": "YA",
        "Image_Source": "assets\\images\\Themarriagelie.jpg"
    },
    {
        "Name": "Here we are now",
        "Author": "Jasmine Warga",
        "Quote": "You seemed lost and found at the same time. And that's how I usually feel too.",
        "Price": "35 000",
        "Rate": 4,
        "Category": "YA",
        "Image_Source": "assets\\images\\Herewearenow.jpg"
    },
    {
        "Name": "The Sun Is Also a Star",
        "Author": "Nicola Yoon",
        "Quote": "Maybe part of falling in love with someone else is also falling in love with yourself",
        "Price": "40 000",
        "Rate": 4,
        "Category": "YA",
        "Image_Source": "assets\\images\\thesunisalsoastar.png"
    },
    {
        "Name": "All your perfects",
        "Author": "Colleen Hoover",
        "Quote": "If you only shine light on your flaws, all your perfects will dim",
        "Price": "45 000",
        "Rate": 4.3,
        "Category": "YA",
        "Image_Source": "assets\\images\\Allyourperfects.jpg"
    }
 

  


]

   


    
    

    
    

 
   

 
            
    


      


   

  
 