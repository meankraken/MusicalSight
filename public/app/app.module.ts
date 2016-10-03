import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } 	 from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { RecentComponent } from './recent.component';
import { AddImageComponent } from './add-image.component';
import { ImageView } from './image.component';
import { ImageService } from './image.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations:	[ AppComponent, RecentComponent, AddImageComponent, ImageView ],
  bootstrap:	[ AppComponent ],
  providers:	[ ImageService ]
})

export class AppModule { }