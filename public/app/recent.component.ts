import { Component, OnInit } from '@angular/core'; 

import { ImageService } from './image.service';
import { Image } from './image';

@Component({
	selector:'recent-list',
	template:`
		<div id='theView'>
			<h2>Recent Additions</h2>
			<div class="grid">
				<image-view *ngFor="let image of recentImages; let i = index" [theImage]="image" [theIndex]="i" [username]="currentUser" (deleteImage)="deleteImage($event)"></image-view>
			</div>
		</div>
	`,
	styleUrls:['public/stylesheets/list.css']
})

export class RecentComponent implements OnInit {
	recentImages: Image[] = []; //array for holding recent images 
	currentUser: string; //username of current user  
	
	constructor(private imageService: ImageService) { }
	
	ngOnInit(): void { //on init, pull the recent image list using ImageService and the username
		this.imageService.getRecentImages().then(arr => { this.recentImages = arr.slice(); } );
		this.imageService.getCurrentUser().then(username => { this.currentUser = username.toString(); });
	}
	
	addImage(toAdd:Image) { //add the uploaded image to the top of the list
		this.recentImages.unshift(toAdd); 
	}
	 
	ngAfterViewChecked() {
		/*
		$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: 50,
		  //percentPosition: true,
		  gutter:10
		});
		*/
	}
	
	deleteImage(toDelete:Image) {
		var index = -1;
		for (var i=0; i<this.recentImages.length; i++) {
			if (toDelete._id == this.recentImages[i]._id) {
				index = i;
			}
		}
		this.recentImages.splice(index,1);
	}
	 
	
}