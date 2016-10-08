import { Component, OnInit } from '@angular/core';

import { Image } from './image';
import { ImageService } from './image.service';

@Component({
	selector:'own-list',
	template:`
		<div id='theView'>
			<h2>Personal Gallery</h2>
			<h4 *ngIf="isLogged()">Login to view your gallery!</h4>
			<div class="grid">
				<image-view *ngFor="let image of ownImages; let i = index" [theImage]="image" [theIndex]="i" [username]="currentUser" (deleteImage)="deleteImage($event)"></image-view>
			</div>
		</div>
	
	`,
	styleUrls:['public/stylesheets/list.css']
	
})

export class OwnComponent implements OnInit {
	ownImages: Image[] = [];
	currentUser: string;
	
	constructor(private imageService:ImageService) {  }
	
	ngOnInit() { 
		this.imageService.getOwnImages().then(data => this.ownImages = data.slice());
		this.imageService.getCurrentUser().then(username => { this.currentUser = username.toString(); });
	
	}
	
	addImage(toAdd:Image) {
		if (this.ownImages.length<20) {
			this.ownImages.unshift(toAdd);
		}
	}
	
	isLogged() {
		if (this.currentUser=='!none') {
			return true;
		}
		else {
			return false;
		}
	}
	
	deleteImage(toDelete:Image) {
		var index = -1;
		for (var i=0; i<this.ownImages.length; i++) {
			if (toDelete._id == this.ownImages[i]._id) {
				index = i;
			}
		}
		this.ownImages.splice(index,1);
	}
	
}