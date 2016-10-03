import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './image';

@Injectable()
export class ImageService {
	private headers = new Headers({'Content-Type' : 'application/json'});
	constructor(private http: Http) {  }
	
	getRecentImages(): Promise<Image[]> { //pull the most recently uploaded images
		return this.http.get('/getRecent').toPromise().then(res => res.json().imageArr as Image[]).catch(this.handleError);
	}
	
	createImage(title: string, url: string): Promise<Image> { //upload new image 
		return this.http.post('/addImage', JSON.stringify({title: title, url: url}), {headers: this.headers}).toPromise().then(res => res.json()).catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		  return Promise.reject(error.message || error);
	}
	 
}











