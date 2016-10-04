import { Component, OnInit } from '@angular/core'; 

import { ImageService } from './image.service';
import { Image } from './image';


@Component({
	selector:'recent-list',
	template:`
		<div id='recentView'>
			<h2>Recent List</h2>
			<div class="grid">
				<image-view *ngFor="let image of recentImages; let i = index" [theImage]="image" [theIndex]="i" [username]="currentUser"></image-view>
			</div>
		</div>
	`,
	styleUrls:['public/stylesheets/recent-list.css']
})

export class RecentComponent implements OnInit {
	recentImages: Image[] = []; //array for holding recent images 
	currentUser: string; //username of current user 
	componentType = "RecentComponent"; //for identifying this child component 
	
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
	 
	
}