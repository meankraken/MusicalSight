import { Component, Input } from '@angular/core';
import { Image } from './image.js';

@Component({
	selector: 'image-view',
	template:`
		<div class={{getClasses()}}>
			<img src={{theImage.url}} />
			<h5>{{theImage.title}}</h5>
			<div class='infoBox'>
				<span class='uploader'>Uploader - {{theImage.uploader}} </span>
				<span class='likes'>Likes - {{theImage.likes}} </span>
			</div>
			<div class='likeBox'>
				<i class="fa fa-heart"></i>
			</div>
		</div>
	
	`,
	styleUrls:['public/stylesheets/image-view.css']
	
})

export class ImageView {
	@Input() theImage: Image;
	@Input() theIndex: number; 
	
	constructor() {  }
	
	getClasses() { //offset every other row
		if (((this.theIndex)%10)==5) {
			return 'grid-item offset-left';
		}
		else {
			return 'grid-item';
		}
	}
	
}