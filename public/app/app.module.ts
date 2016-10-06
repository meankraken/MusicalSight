import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } 	 from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { RecentComponent } from './recent.component'; //recent list 
import { TopComponent } from './top.component'; //top list
import { OwnComponent } from './own.component'; //own list 
import { GalleryComponent } from './gallery.component'; //searched user's gallery
import { AddImageComponent } from './add-image.component'; //form for uploading images
import { ImageView } from './image.component'; //individual image box 
import { ImageService } from './image.service'; //service for handling http requests


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations:	[ AppComponent, RecentComponent, TopComponent, OwnComponent, GalleryComponent, AddImageComponent, ImageView ],
  bootstrap:	[ AppComponent ],
  providers:	[ ImageService ]
})

export class AppModule { }