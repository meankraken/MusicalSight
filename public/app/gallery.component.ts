import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Image } from './image';
import { ImageService } from './image.service';

@Component({
	selector:'gallery',
	template:`
		<div id='theView'>
			<h2>{{searchedUser}}'s Gallery</h2>
			<div class="grid">
				<image-view *ngFor="let image of userImages; let i = index" [theImage]="image" [theIndex]="i" [username]="currentUser" (deleteImage)="deleteImage($event)"></image-view>
			</div>
		</div>
	`,
	styleUrls:['public/stylesheets/list.css']
	
})

export class GalleryComponent implements OnInit{
	userImages: Image[] = [];
	currentUser: string; //logged in user
	searchedUser: string;
	
	
	constructor(private route:ActivatedRoute, private imageService:ImageService) {   }
	
	ngOnInit(): void {
		this.route.params.forEach((param) => {
			this.searchedUser = param['name'];
			this.imageService.getCurrentUser().then(username => { this.currentUser = username.toString(); });
			this.imageService.getUserImages(this.searchedUser).then(data => {
				this.userImages = data.slice();
			});
		});
	}
	
	deleteImage(toDelete:Image) {
		var index = -1;
		for (var i=0; i<this.userImages.length; i++) {
			if (toDelete._id == this.userImages[i]._id) {
				index = i;
			}
		}
		this.userImages.splice(index,1);
	}
}