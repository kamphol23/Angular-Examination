import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsService: CommentsService;
  commentData: Comment [] = null;
  selectedComment: object [] = [];
  newReview: string = '';

  isItActive = function(comment) {
    let answer = this.selectedComment.includes(comment)
    if(answer){
      return comment
    }
  }
  markedDiv(comment){
    let answer = this.selectedComment.includes(comment)
    if (answer){
      this.selectedComment = this.selectedComment.filter(object => object !== comment)
    } else {
      this.selectedComment.push(comment);
      
    }
  };

  constructor( commentsService: CommentsService ) {

    this.commentsService = commentsService;
   }



  ngOnInit() {


    this.commentData = this.commentsService.getData();
  }
  addReview() {
    let addNewReview: Object = {

      comment: this.newReview

    }
    this.commentsService.setData(addNewReview)

    this.newReview = '';

  }


  removeListComment(comment){
    this.commentData = this.commentsService.removeData(comment);
  }

}
