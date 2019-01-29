import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

public blogtitle:string;
public blogdescription:string;
public blogbody:string;
public blogcategory:string;
public possibleblogcategory = ["comedy","drama","action","technology"];


  constructor(public bloghttpservice:BlogHttpService,public activerouter:ActivatedRoute,public router:Router,private toastr: ToastrService) { 
    
  }

  ngOnInit() {
  }

  public createBlog():any{

    let blogData = {
    title:this.blogtitle,
    description:this.blogdescription,
    blogBody:this.blogbody,
    category:this.blogcategory
    }
    console.log(blogData);
    this.bloghttpservice.createBlog(blogData).subscribe(

      data => {
        console.log("blog created successfully");
        console.log(data);
        this.toastr.success('Blog posted successfully', 'Success!');

       setTimeout(() =>{
             this.router.navigate(['/blogView',data.data.blogId]);
             console.log(data.data.blogId);
       },1000)
       
      },
       
       error => {
       console.log("error from the init eror");
       //console.log(error.errorMessage);
       this.toastr.error('Some error occured', 'Oops!');
       }

      )
  }

 

}
