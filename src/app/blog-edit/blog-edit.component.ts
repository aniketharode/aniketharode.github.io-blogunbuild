import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(public bloghttpservice:BlogHttpService,public activerouter:ActivatedRoute,public router:Router,private toastr: ToastrService) { 
    
  }

  public currentblogvalue;
  public possibleblogcategory = ["comedy","drama","action","technology"];



  ngOnInit() {
    let blogId = this.activerouter.snapshot.paramMap.get('blogId');

    console.log(blogId);
   // this.currentblogvalue = this.bloghttp.getInfo(blogId);
   // console.log("currentblogview"+this.currentblogvalue);
    this.bloghttpservice.getInfo(blogId).subscribe(

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


  editBlog():any{

    this.bloghttpservice.editBlog(this.currentblogvalue.blogId,this.currentblogvalue).subscribe(

      data => {
        console.log("blog created successfully");
        console.log(data);
        this.toastr.success('Blog Edited successfully', 'Success!');

       setTimeout(() =>{
             this.router.navigate(['/blogView',this.currentblogvalue.blogId]);
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
