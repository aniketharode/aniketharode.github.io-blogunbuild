import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';

import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentblogvalue:any;
  



  constructor(private activerouter:ActivatedRoute,private router:Router,private allblog:BlogService,public bloghttp:BlogHttpService,private toastr: ToastrService,public location:Location) { 
    console.log("calling form the constructor");
  }

  ngOnInit() {
    let blogId = this.activerouter.snapshot.paramMap.get('blogId');

    console.log(blogId);
   // this.currentblogvalue = this.bloghttp.getInfo(blogId);
    console.log("currentblogview"+this.currentblogvalue);
    this.bloghttp.getInfo(blogId).subscribe(

      data => {
        console.log("inside the data of the init");
        this.currentblogvalue=data["data"];
        //console.log("inside the data of the init"+this.currentblogvalue.blogId);
       },
       
       error => {
       console.log("error from the init eror");
       //console.log(error.errorMessage);
       
       }
       


    )
  }

  public deleteThisBlog():any{
    this.bloghttp.deleteBlog(this.currentblogvalue.blogId).subscribe(
     
      data => {
        
        this.toastr.success('Blog deleted successfully', 'Success!');
       
        setTimeout(() =>{
          this.router.navigate(['/home']);
          //console.log(data.data.blogId);
    },1000)
       
      },
       
       error => {
       // alert("error deleting the blog 2");
       //console.log("error from the init eror");
       //console.log(error.errorMessage);
       this.toastr.error('Some error occured', 'Oops!');
       }

      )
  }


  goBack():any{
    this.location.back();
  }

  
}
