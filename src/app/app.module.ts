import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';

import { BookService } from './services/book.service';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewbooksComponent,
    AddbooksComponent,
    UpdatebooksComponent,
    SearchbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
