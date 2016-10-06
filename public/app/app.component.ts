import { Component, ViewChild, ElementRef } from '@angular/core';
import { Image } from './image';
import { ImageService } from'./image.service';
import { Router } from '@angular/router';

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
		<form (ngSubmit)='goToGallery()'>
			<input [(ngModel)]='searchValue' name='userString' type='text' id='gallerySearch' placeholder='Search for user gallery' (ngModelChange)='searchUser()' />
		</form>
		<div *ngIf='showSuggestions==true' class='userList'>
			<div *ngFor='let user of matchingUsers' (click)='goToGallery(user)' class='userBox'>{{user}}</div>
		</div>
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
	childView //hold ref to child list
	searchValue: string; 
	matchingUsers: string[] = []; //hold the matching users
	showSuggestions: boolean = false;//bool to determine if suggestions are shown
	private timer;
	
	constructor(private imageService: ImageService, private router: Router) {   }
	
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
	
	searchUser(): void { //handle search input changes
		if (this.searchValue.length<=0) {
			this.showSuggestions = false;
		}
		else {
			clearTimeout(this.timer);
			this.imageService.getUserList(this.searchValue).subscribe(users => { 
				this.matchingUsers = users.slice();
				this.showSuggestions = true;
				this.timer = setTimeout( () => {
					this.showSuggestions = false;
				},2500);
			});
		}
	}
	
	hideSuggest(): void {
		this.showSuggestions = false;
	}
	
	goToGallery(username:string): void { //go to user's gallery via search 
		if (username) {
			this.router.navigate(['/user', username]);
		}
		else if (!this.matchingUsers.includes(this.searchValue)) { //if no match
			alert("No user found. Please enter a valid username.");
		}
		else {
			this.router.navigate(['/user', this.searchValue]);
		}
	}

	
}







