import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

 @Input() bookId:number=0;
 @Input() bookName:string="Book Name";
 @Input() bookPrice:number=0;

}
