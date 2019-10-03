import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.scss']
})
export class ViewbooksComponent implements OnInit {

  public books: any;
  public selectedBooks = [];
  public currentbook;
  public searchValue: string;

  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.bookService.getBooks().subscribe((res: any[]) => {
      this.books = res;
    });
  }
  deleteBooks(selectedBooks: []) {
    if (selectedBooks.length === 0) {
      alert('No books Selected to delete');
    } else {
      this.bookService.deleteSelectedBooks(selectedBooks);
      alert('Books Deleted Successfully');
      this.bookService.getBooks().subscribe((res: any[]) => {
        this.books = res;
      });
    }
  }
  deleteBook(id: string) {
    this.bookService.deleteSelecetedBook(id);
    alert('Book Deleted Successfully');
    this.bookService.getBooks().subscribe((res: any[]) => {
      this.books = res;
    });
  }

  updateBook(id: string) {
    this.bookService.getCurrentBook(id).subscribe((res: any[]) => {
      this.currentbook = res;
    });
  }
  checkbox(id: string) {
    const index = this.selectedBooks.indexOf(id);
    if (index === -1) {
      this.selectedBooks.push(id);
    } else {
      this.selectedBooks.splice(index, 1);
    }
  }
}
