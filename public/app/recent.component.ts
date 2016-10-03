import { Component, OnInit } from '@angular/core'; 

import { ImageService } from './image.service';
import { Image } from './image';


@Component({
	selector:'recent-list',
	template:`
		<div id='recentView'>
			<h2>Recent List</h2>
			<div class="grid">
				<image-view *ngFor="let image of recentImages; let i = index" [theImage]="image" [theIndex]="i"></image-view>
			</div>
		</div>
	`,
	styleUrls:['public/stylesheets/recent-list.css']
})

export class RecentComponent implements OnInit {
	recentImages: Image[] = []; //array for holding recent images 
	
	
	constructor(private imageService: ImageService) { }
	
	ngOnInit(): void { //on init, pull the recent image list using ImageService 
		this.imageService.getRecentImages().then(arr => { this.recentImages = arr.slice(); } );
		
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