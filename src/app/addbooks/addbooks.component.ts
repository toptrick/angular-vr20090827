import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {

  title: string;
  author: string;
  isbn: string;
  pubdate: string;
  publisher: string;
  price: string;
  genre: string;
  format: string;
  bookadded: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  addBooks() {
    let id = new Date();
    this.bookService.addBook({id: id, title: this.title, author: this.author, isbn: this.isbn,
    pubdate: this.pubdate, publisher: this.publisher, price: this.price, genre: this.genre, format: this.format});
    this.bookadded = 'added';
    this.title = '';
    this.author = '';
    this.isbn = '';
    this.pubdate = '';
    this.publisher = '';
    this.price = '';
    this.genre = '';
    this.format = '';
  }

}
