import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.scss']
})
export class UpdatebooksComponent implements OnInit {

  @Input() updatebook: JSON;

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
  updateBook(id: string) {
    this.bookService.updateBook({id: id, title: this.title, author: this.author, isbn: this.isbn,
      pubdate: this.pubdate, publisher: this.publisher, price: this.price, genre: this.genre, format: this.format});
    alert('Book Updated Successfully!!!');
    window.location.reload();
  }

}
