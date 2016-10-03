import { Component, Output, EventEmitter } from '@angular/core';

import { ImageService } from './image.service';
import { Image } from './image';

@Component({
	moduleId: module.id,
	selector:'add-image',
	template:`
		<div class='popUp'>
			<form (ngSubmit)="onSubmit()">
				<h3>Add an image to your gallery:</h3>
				<hr/>
				<label>Title </label>
				<input [(ngModel)]='imageTitle' id='titleInput' type='text' name='title'/>
				<br/>
				<label>Image URL </label>
				<input [(ngModel)]='imageUrl' id='urlInput' type='text' name='url'/>
				<hr/>
				<button class='btn btn-primary' type='submit'>Submit</button>
				<button class='btn btn-default' type='button' (click)='cancelForm()'>Cancel</button>
			</form>
		</div>
	`,
	styleUrls:['../stylesheets/addForm.css']
})

export class AddImageComponent {
	@Output() hideForm = new EventEmitter();
	@Output() addImage = new EventEmitter();
	imageTitle: string;
	imageUrl: string;
	
	constructor(private imageService: ImageService) {  }
	
	onSubmit(): void {
		if (this.imageTitle.length>75) {
			alert("Title cannot exceed 75 characters.");
		}
		else {
			this.imageService.createImage(this.imageTitle, this.imageUrl).then(data => {
				if (data.title=='Not logged in!') { alert('You must be logged in.'); }  
				else { this.addImage.emit(data); this.hideForm.next(); }
			});
		}
	}
	
	cancelForm(): void {
		this.hideForm.next();
	}
	
	
}





