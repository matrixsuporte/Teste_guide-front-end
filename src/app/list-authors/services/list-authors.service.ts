import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author';

@Injectable({
  providedIn: 'root'
})
export class ListAuthorsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAuthors(): Observable<any> {
    const url = `https://localhost:44368/api/book`;
    return this.http.get(url);
  }


  public getAuthorsWithParams(quantity: number, names: string): Observable<any> {
    const url = `https://localhost:44368/api/book/${quantity}/${names}`;
    return this.http.get(url);
  }

  public addAuthor(author:Author): Observable<any> {
    const url = `https://localhost:44368/api/book`;
    return this.http.post(url, author);
  }
}
