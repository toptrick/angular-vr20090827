import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BookService {

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get('http://localhost:3000/books');
  }
  getCurrentBook(id: string) {
    return this.http.get('http://localhost:3000/books/' + id);
  }

  addBook(book: any) {
    this.http.post('http://localhost:3000/books', book).subscribe();
  }

  updateBook(book: any) {
    this.http.patch('http://localhost:3000/books/' + book.id, book).subscribe();
  }

  deleteSelectedBooks(selectedBooks: []) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < selectedBooks.length; i++) {
      this.http.delete('http://localhost:3000/books/' + selectedBooks[i]).subscribe();
    }
  }

  deleteSelecetedBook(id: string) {
    this.http.delete('http://localhost:3000/books/' + id).subscribe();
  }
  searchBooks(url: string) {
    return this.http.get(url);
  }
}
