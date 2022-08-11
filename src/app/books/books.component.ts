import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) {
    
  }

  books: Book[] = [];


  isShowing: boolean = true;

 

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }


}
