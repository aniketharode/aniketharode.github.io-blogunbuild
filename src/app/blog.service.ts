import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private currentblogvalue:any;

  constructor() { 
    console.log("inside the getAllBlogs");
  }


  public allBlogs = [

    {
    "blogId":"1",
    "blogTitle":"Title 1",
    "lastModified":"2018-06-18T09:32:50.55555",
    "created":"2018-06-18T09:32:50.55555",
    "tags":["comedy","humor"],
    "blogText":"hi these my blog 1",
    "auther":"admin",
    "category":"comedy"
    },
    {
      "blogId":"2",
      "blogTitle":"Title 2",
      "lastModified":"2018-06-18T09:32:50.55555",
      "created":"2018-06-18T09:32:50.55555",
      "tags":[],
      "blogText":"<h3>hi these my blog 2<h3>",
      "auther":"user",
      "category":"comedy"
    },
    {
      "blogId":"3",
      "blogTitle":"Title 3",
      "lastModified":"2018-06-18T09:32:50.55555",
      "created":"2018-06-18T09:32:50.55555",
      "tags":[],
      "blogText":"hi these my blog 3",
      "auther":"admin",
      "category":"comedy"
    }
    
    
    
    ]


    public getInfo(blogId):any {

      for(let blog of this.allBlogs)
      {
          if(blog.blogId==blogId){
               this.currentblogvalue=blog;
          }
     }
     console.log(this.currentblogvalue.blogId);
      return this.currentblogvalue;
   }
    


  
}
