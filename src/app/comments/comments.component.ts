import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  post: any;
  constructor(private activeRoute: ActivatedRoute,
    private postService: PostService,
    private location: Location) { }

  ngOnInit(): void {
    let prdID = this.activeRoute.snapshot.paramMap.get('postid');
    // console.log(prdID);
    
     let product2= this.postService.getPostById(Number(prdID));
    this.post=product2;
    // console.log(product2)
  }
  goBack(){
    this.location.back();
  }
}
