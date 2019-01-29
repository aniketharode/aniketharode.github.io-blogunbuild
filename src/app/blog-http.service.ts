import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
//import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class BlogHttpService {

  public allBlogs;
  private currentblogvalue;
  public baseurl='https://blogapp.edwisor.com/api/v1/blogs';

  //public baseurl= 'https://blogapp.edwisor.com/api/v1/blogs/view/:blogId'

  constructor(public _http:HttpClient) { 
console.log("inside the getAllBlogs");

  }

  public getInfo(blogId):any {
    console.log("inside the getInfo of the http service");
   let response=  this._http.get(this.baseurl+ '/view' + '/' +blogId+ '?authToken=YTcyMTcxZGM4ODJjMTQ2ODM1Y2IzMzJhYTkyNTk1OGYxYjU2ZDk1ZDE3ODI4MzExNzM5YWJkN2Q0ZTg4OTg3NGI0ZmI1MWUzZDUwZTkzNGQ5MTQ0M2YxZDc5NzcwZDZkMzFhNmE4NDFhOGYzZWNiMTcyOTc5ZDVjZDRmMTRiMGIyZg== ');
    return response;
  }

 public getAllBlogs():any{
   console.log("inside the getAllBlogs");
let response = this._http.get('https://blogapp.edwisor.com/api/v1/blogs/all?authToken=YTcyMTcxZGM4ODJjMTQ2ODM1Y2IzMzJhYTkyNTk1OGYxYjU2ZDk1ZDE3ODI4MzExNzM5YWJkN2Q0ZTg4OTg3NGI0ZmI1MWUzZDUwZTkzNGQ5MTQ0M2YxZDc5NzcwZDZkMzFhNmE4NDFhOGYzZWNiMTcyOTc5ZDVjZDRmMTRiMGIyZg== ');
 return response;
}


public getError(err:HttpErrorResponse){
  console.log("in the error of http error");
  return Observable.throw(err.message);

}

public createBlog(blogData):any{
 
  let response = this._http.post('https://blogapp.edwisor.com/api/v1/blogs/create?authToken=YTcyMTcxZGM4ODJjMTQ2ODM1Y2IzMzJhYTkyNTk1OGYxYjU2ZDk1ZDE3ODI4MzExNzM5YWJkN2Q0ZTg4OTg3NGI0ZmI1MWUzZDUwZTkzNGQ5MTQ0M2YxZDc5NzcwZDZkMzFhNmE4NDFhOGYzZWNiMTcyOTc5ZDVjZDRmMTRiMGIyZg== ',blogData);
  return response;
}

public deleteBlog(blogId):any{
  let data = {};
  console.log(blogId);
  let response = this._http.post(this.baseurl + '/' +blogId+ '/' + 'delete'+ '?authToken=YTcyMTcxZGM4ODJjMTQ2ODM1Y2IzMzJhYTkyNTk1OGYxYjU2ZDk1ZDE3ODI4MzExNzM5YWJkN2Q0ZTg4OTg3NGI0ZmI1MWUzZDUwZTkzNGQ5MTQ0M2YxZDc5NzcwZDZkMzFhNmE4NDFhOGYzZWNiMTcyOTc5ZDVjZDRmMTRiMGIyZg== ',data);
  return response;
}


public editBlog(blogId,blogData):any{
 
  let response = this._http.put(this.baseurl+'/'+blogId+'/edit'+'?authToken=YTcyMTcxZGM4ODJjMTQ2ODM1Y2IzMzJhYTkyNTk1OGYxYjU2ZDk1ZDE3ODI4MzExNzM5YWJkN2Q0ZTg4OTg3NGI0ZmI1MWUzZDUwZTkzNGQ5MTQ0M2YxZDc5NzcwZDZkMzFhNmE4NDFhOGYzZWNiMTcyOTc5ZDVjZDRmMTRiMGIyZg== ',blogData);
  return response;
}


}
