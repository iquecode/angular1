import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg",
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL.jpg",
        amount: 800,
      },
    ];
  }
}
