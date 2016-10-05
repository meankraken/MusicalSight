import { Component, ViewChild, ElementRef } from '@angular/core';
import { Image } from './image';

import { RecentComponent } from './recent.component';

@Component({
  selector: 'my-app',
  template:` 
	<add-image *ngIf='showUploadForm' (hideForm)='hideForm()' (addImage)='addImage($event)'></add-image>
	<div class='toolBar'>
		<h1 class='headerText'>Browse</h1>
		<div id='searchText'><h1 class='headerText'>Search</h1></div>
		<div id='shareText'><h1 class='headerText'>Share</h1></div>
		<div id='shareBtn' (click)='showForm()'>+</div>
		<input type='text' id='gallerySearch' placeholder='Search for user gallery'/>
		<nav id='links'>
			<a routerLink="/recent" routerLinkActive="active">RECENT</a>
			<a routerLink="/top" routerLinkActive="active">TOP</a>
			<a routerLink="/own" routerLinkActive="active">OWN</a>
		</nav>
   
	</div>
	
	<router-outlet (activate)="getChild($event)"></router-outlet>
	`,
   styleUrls: ['public/stylesheets/app.css']
})


export class AppComponent { 
	childView
	
	getChild(childRef) { //once router-outlet activates, pull the reference to the child and set to childView 
		this.childView = childRef; 
		
	}

	showUploadForm = false; //flag for displaying 
	
	showForm(): void {
		$('#fullMask').css('display','block');
		this.showUploadForm = true;
		 
	}
	
	hideForm(): void {
		$('#fullMask').css('display','none');
		this.showUploadForm = false;
		
	}
	
	addImage(data): void { //call addImage in child RecentComponent
		this.childView.addImage(data);
	}
	
}