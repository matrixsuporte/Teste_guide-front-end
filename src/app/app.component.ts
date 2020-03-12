import { Component } from '@angular/core';
import { ListAuthorsService } from './list-authors/services/list-authors.service';
import { Author } from './models/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontObrasBibliograficas';
  public name_author: string;
  public id: number;

  constructor(private listAuthorsService: ListAuthorsService) {
   this.listAuthorsService.getAuthors().subscribe(response => {
      for(const item in response) {
        this.id = response.length + 1;

      }
    })
  }

  public saveAuthor() {
    const author = new Author(this.id, this.name_author);
    this.listAuthorsService.addAuthor(author).subscribe(response => {
      console.log(response);
    });
  }
}
