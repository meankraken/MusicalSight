import { Component, Input } from '@angular/core';
import { Image } from './image.js';

import { ImageService } from './image.service';

@Component({
	selector: 'image-view',
	template:`
		<div class={{getClasses()}}>
			<img src={{theImage.url}} />
			<h5>{{theImage.title}}</h5>
			<div class='infoBox'>
				<span class='uploader'>Uploader - {{theImage.uploader}} </span>
				<span class='likes'>Favorites - {{theImage.likes.length}} </span>
			</div>
			<div class={{likeBtnClasses()}} (click)="likeImage()" >
				<i class="fa fa-heart"></i>
			</div>
		</div>
	
	`,
	styleUrls:['public/stylesheets/image-view.css']
	
})

export class ImageView {
	@Input() theImage: Image; //this image
	@Input() theIndex: number; //index of the image in recent list
	@Input() username: string; //current user's username
	
	constructor(private imageService: ImageService) {  }
	
	getClasses() { //offset every other row
		if (((this.theIndex)%10)==5) {
			return 'grid-item offset-left';
		}
		else { 
			return 'grid-item';
		}
	}
	
	likeBtnClasses() { //return the like button's classes
		if (this.theImage.uploader == this.username || this.username == "!none") {
			return 'hide';
		}
		else if (this.theImage.likes.includes(this.username)) {
			return 'likeBox liked';
		}
		else {
			return 'likeBox';
		}
	}
	
	likeImage() { //toggle like 
		 if (this.theImage.likes.includes(this.username)) {
			 this.imageService.unlikeImage(this.theImage);
			 var index = this.theImage.likes.indexOf(this.username);
			 this.theImage.likes.splice(index,1);
		 }
		 else {
			 this.imageService.likeImage(this.theImage);
			 this.theImage.likes.push(this.username);
		 }
	}
	
}