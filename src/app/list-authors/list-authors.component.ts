import { Component, OnInit } from '@angular/core';
import { ListAuthorsService } from './services/list-authors.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.scss']
})
export class ListAuthorsComponent implements OnInit {

  public listAuthors: Array<Author>;
  public listAuthorsHandle: Array<Author>;
  public names: string;
  public quantity: number;

  constructor(private listAuthorsService: ListAuthorsService) {
    this.listAuthors = new  Array<Author>();
    this.listAuthorsHandle = new  Array<Author>();
   
  }

  ngOnInit(): void {
    this.listAuthorsService.getAuthors().subscribe(response => {
      for(const item in response) {
        this.listAuthors.push(response[item] as Author);

      }
    })
  }

  public searchAuthor() {
    debugger;
    this.listAuthorsHandle = new  Array<Author>();  
    this.listAuthorsService.getAuthorsWithParams(this.quantity, this.names).subscribe(response => {
      for(const item in response) {
        this.listAuthorsHandle.push(response[item]);
      }
    })
  }

}
