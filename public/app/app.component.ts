import { Component } from '@angular/core';
import { Image } from './image';


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
			<a href='/'>TOP</a>
			<a href='/'>TEST</a>
		</nav>
   
	</div>
	
	<router-outlet></router-outlet>
	`,
   styleUrls: ['public/stylesheets/app.css']
})


export class AppComponent { 
	showUploadForm = false; //flag for displaying 
	
	showForm(): void {
		$('#fullMask').css('display','block');
		this.showUploadForm = true;
		
	}
	
	hideForm(): void {
		$('#fullMask').css('display','none');
		this.showUploadForm = false;
		
	}
	
	addImage(data): void {
		
	}
	
}