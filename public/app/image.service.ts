import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Image } from './image';

@Injectable()
export class ImageService {
	private headers = new Headers({'Content-Type' : 'application/json'});
	constructor(private http: Http) {  }
	
	getCurrentUser(): Promise<String> {
		return this.http.get('/getUsername').toPromise().then(res => res.json().username).catch(this.handleError);
	}
	
	getRecentImages(): Promise<Image[]> { //pull the most recently uploaded images
		return this.http.get('/getRecent').toPromise().then(res => res.json().imageArr as Image[]).catch(this.handleError);
	}
	
	getTopImages(): Promise<Image[]> { //pull the most liked images
		return this.http.get('/getTop').toPromise().then(res => res.json().imageArr as Image[]).catch(this.handleError); 
	}
	
	getOwnImages(): Promise<Image[]> { //pull user's own images
		return this.http.get('/getOwn').toPromise().then(res => res.json().imageArr as Image[]).catch(this.handleError); 
	}
	
	getUserImages(user:string): Promise<Image[]> { //pull searched user's images
		return this.http.get('/getUser/' + user).toPromise().then(res => res.json().imageArr as Image[]).catch(this.handleError);
	}
	
	createImage(title: string, url: string): Promise<Image> { //upload new image 
		return this.http.post('/addImage', JSON.stringify({title: title, url: url}), {headers: this.headers}).toPromise().then(res => res.json()).catch(this.handleError);
	}
	
	likeImage(theImage: Image): Promise<Image> { //like an image
		return this.http.post('/likeImage', JSON.stringify(theImage), {headers: this.headers}).toPromise().then(res => res.json()).catch(this.handleError);
	}
	
	unlikeImage(theImage: Image): Promise<Image> { //unlike an image
		return this.http.post('/unlikeImage', JSON.stringify(theImage), {headers: this.headers}).toPromise().then(res => res.json()).catch(this.handleError);
	}
	
	getUserList(userString: string): Observable<string[]> { //get the matching user list for user search feature
		return this.http.post('/getUserList', JSON.stringify({ data: userString }), {headers: this.headers}).map(res => res.json().users);
	}
	
	private handleError(error: any): Promise<any> {
		  return Promise.reject(error.message || error);
	}
	 
}











