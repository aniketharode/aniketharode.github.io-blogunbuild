import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import {RouterModule,Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
//import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogViewComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
     {path:'home',component:HomeComponent},
     {path:'',redirectTo:'home',pathMatch:'full'},
     {path:'create',component:BlogCreateComponent},
     {path:'edit/:blogId',component:BlogEditComponent},
     {path:'blogView/:blogId',component:BlogViewComponent}
    ])

  ],
  providers: [BlogService,BlogHttpService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
