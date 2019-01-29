import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs;

  constructor(public bloghttp:BlogHttpService) { 
    console.log("home component constructor called");

  }



  ngOnInit() {
    console.log("home component ngoninit called");
  this.allBlogs=  this.bloghttp.getAllBlogs().subscribe(

data => {
 console.log("inside the data of the init");
 this.allBlogs=data["data"];

},

error => {
console.log("error from the init eror");
//console.log(error.errorMessage);

}

  )



  
  }

}
