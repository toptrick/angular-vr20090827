import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.scss']
})
export class SearchbooksComponent implements OnInit {

  public searchValue: string;
  public searchResults: Array<any>;
  public s: number;
  constructor(private bookService: BookService, private http: HttpClient) { }

  ngOnInit() {
  }
  searchBook() {
    this.searchValue = this.searchValue;
    this.searchResults = [];
    this.bookService.searchBooks('http://localhost:3000/books/?title=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?author=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?isbn=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?pubdate=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?publisher=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?price=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?genre=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
    this.bookService.searchBooks('http://localhost:3000/books/?format=' + this.searchValue).subscribe((res: any[]) => {
      // tslint:disable-next-line: triple-equals
      if (res.length !== 0) {
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.length; i++) {
          this.searchResults.push(res[i]);
        }
      }
    });
  }

}
