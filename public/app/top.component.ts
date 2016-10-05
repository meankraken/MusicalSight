import { Component, OnInit } from '@angular/core';

import { Image } from './image';
import { ImageService } from './image.service';

@Component({
	selector:'top-list',
	template:`
		<div id='theView'>
			<h2>Top Favorites</h2>
			<div class="grid">
				<image-view *ngFor="let image of topImages; let i = index" [theImage]="image" [theIndex]="i" [username]="currentUser"></image-view>
			</div>
		</div>
	
	`,
	styleUrls:['public/stylesheets/list.css'] 
	
})

export class TopComponent implements OnInit {
	topImages: Image[] = [];
	currentUser: string;
	
	constructor(private imageService:ImageService) {  }
	
	ngOnInit() { 
		this.imageService.getTopImages().then(data => this.topImages = data.slice());
		this.imageService.getCurrentUser().then(username => { this.currentUser = username.toString(); });
	}
	
	addImage(toAdd:Image) {
		if (this.topImages.length<20) {
			this.topImages.push(toAdd);
		}
	}
	
}












