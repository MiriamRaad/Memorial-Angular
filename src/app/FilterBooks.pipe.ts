import {Pipe, PipeTransform } from '@angular/core'

@Pipe ({name: 'BookfilterPipe'})

export class BookfilterPipe implements PipeTransform
 {
    transform(items : any[] , criteria: string): any 
    {
        if(criteria == "all")
        {return items}
        else
        return items.filter(item => {return item.Category === criteria});
    }
 }