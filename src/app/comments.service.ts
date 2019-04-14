import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: Comment [] = [
    {
      comment: 'Bästa resa nånsin. Speciell när pucken gjorde det där sjukt snygga Dream coll.',
    },
    {
      comment: 'Bästa resa nånsin. Speciell när pucken gjorde det där sjukt snygga Dream coll.',

    },
    {
      comment: 'Bästa resa nånsin. Speciell när pucken gjorde det där sjukt snygga Dream coll.',
    },
  ]
  constructor() { }

  getData(): Comment [] {
    return this.comments;
  }
  setData(object) {
    this.comments.push(object);
  }
  removeData(object){
    this.comments = this.comments.filter(comment => comment !== object);
    return this.comments
  }
}
