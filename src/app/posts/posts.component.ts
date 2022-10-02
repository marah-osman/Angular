import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../Services/post.service';
import { Ipost } from '../Shared-Classes-and types/Ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  postErrorMsg: any;
  postslist: Ipost[] | undefined;
  getErrorMsg: any;

  
  constructor(private postService:PostService,private router:Router) { 
   
  }

  ngOnInit(): void {

    this.postService.getAllposts().subscribe( (userData: any)=>{
      this.postslist=userData;
      console.log(userData)
    },
    (error: any)=>{
      this.getErrorMsg=error;
    }
  )
    
  }
  goTopostcomments(postid:any){
    this.router.navigate(['/comment',postid]);

  }

}
