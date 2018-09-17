import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-albums-searcher',
	templateUrl: './albums-searcher.component.html',
	styleUrls: ['./albums-searcher.component.css']
})
export class AlbumsSearcherComponent implements OnInit {
	// not important variable but it demonstrate data binding in Angular
	message: string = "The search results will be displayed below";
	// user prompt variable, used as a part of "get request"
	requestedName: string = "";
	// variable for iTunes response
	responseItunes: any;
	// not currently used
	responseDeezer: any;


	constructor(private http: HttpClient) { }

	ngOnInit() {

	}
	/*
	Method for sending "get" requests to iTunes and deezer APIs
	new functionality of Angular 6 used. Observable object. 
	Response saved to local variable "responseItunes"
	*/
	search(){
		this.http.get('https://itunes.apple.com/search?term=' + this.requestedName + '&entity=album')
		.subscribe((responseItunes) => {
			this.responseItunes = responseItunes;
			// for debugging uncoment that
			
			// console.log(this.responseItunes);
		});

		// unfortunately i'm fall whith deezer API. I got a Cross-Origin Read Blocking (CORB) problem
		// it looks like this:
		// Failed to load https://api.deezer.com/search/album?q=eminem: 
		// No 'Access-Control-Allow-Origin' header is present on the requested resource. 
		// Origin 'http://localhost:4200' is therefore not allowed access.
		// i try to resolve this proplem but the only method which i found tels
		// to run brovser in specified mode. It is work but i think it is not
		// a correct solution
		// so i decided to disable deezer api request for now
		

		// this.http.get('https://api.deezer.com/search/album?q=' + this.requestedName)
		// .subscribe((responseDeezer) => {
		// 	this.responseDeezer = responseDeezer;
		// 	console.log(this.responseDeezer);
		// });
	}

}
