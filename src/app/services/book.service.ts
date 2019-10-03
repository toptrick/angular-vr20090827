import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BookService {

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get('http://angular-vr20090827.stackblitz.io/books');
  }
  getCurrentBook(id: string) {
    return this.http.get('http://angular-vr20090827.stackblitz.io/books/' + id);
  }

  addBook(book: any) {
    this.http.post('http://angular-vr20090827.stackblitz.io/books', book).subscribe();
  }

  updateBook(book: any) {
    this.http.patch('http://angular-vr20090827.stackblitz.io/books/' + book.id, book).subscribe();
  }

  deleteSelectedBooks(selectedBooks: []) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < selectedBooks.length; i++) {
      this.http.delete('http://angular-vr20090827.stackblitz.io/books/' + selectedBooks[i]).subscribe();
    }
  }

  deleteSelecetedBook(id: string) {
    this.http.delete('http://angular-vr20090827.stackblitz.io/books/' + id).subscribe();
  }
  searchBooks(url: string) {
    return this.http.get(url);
  }
}
